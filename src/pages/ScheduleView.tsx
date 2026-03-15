import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Plus, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { AddEventDialog } from '@/components/schedule/AddEventDialog';
import { ScheduleEventBlock, type EventLayout } from '@/components/schedule/ScheduleEventBlock';
import { useSupabaseSchedule } from '@/hooks/useSupabaseSchedule';
import type { ScheduleEvent } from '@/types/schedule';
import { cn } from '@/lib/utils';

// --- Grid constants -----------------------------------------------------------

const GRID_START = 7;
const GRID_END = 22;
const HOUR_H = 64;
const HOURS = Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i);

type ViewMode = 'day' | 'week' | 'month';

// --- Date helpers -------------------------------------------------------------

const DAYS_PL = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
const MONTHS_PL_SHORT = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
const MONTHS_PL_LONG = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

function localDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function getMondayOf(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function getWeekDaysFromDate(date: Date): string[] {
  const monday = getMondayOf(date);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return localDateStr(d);
  });
}

function getMonthGridDays(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - firstWeekday);

  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

function formatPeriodLabel(viewMode: ViewMode, currentDate: Date, visibleDays: string[]): string {
  if (viewMode === 'month') {
    return `${MONTHS_PL_LONG[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  }

  if (viewMode === 'day') {
    return `${currentDate.getDate()} ${MONTHS_PL_LONG[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  }

  const first = parseLocalDate(visibleDays[0]);
  const last = parseLocalDate(visibleDays[visibleDays.length - 1]);
  if (first.getMonth() === last.getMonth() && first.getFullYear() === last.getFullYear()) {
    return `${first.getDate()}-${last.getDate()} ${MONTHS_PL_SHORT[first.getMonth()]} ${first.getFullYear()}`;
  }
  return `${first.getDate()} ${MONTHS_PL_SHORT[first.getMonth()]} - ${last.getDate()} ${MONTHS_PL_SHORT[last.getMonth()]} ${last.getFullYear()}`;
}

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

const TRAINER_FILTER_COLORS = {
  rose: { solid: '#f43f5e', light: '#ffe4e6', text: '#9f1239', border: '#fecdd3' },
  emerald: { solid: '#10b981', light: '#d1fae5', text: '#064e3b', border: '#a7f3d0' },
  violet: { solid: '#8b5cf6', light: '#ede9fe', text: '#4c1d95', border: '#ddd6fe' },
} as const;

// --- Event layout for hour grid ----------------------------------------------

function layoutDay(events: ScheduleEvent[]): EventLayout[] {
  if (events.length === 0) return [];
  const sorted = [...events].sort((a, b) => toMinutes(a.startTime) - toMinutes(b.startTime));
  const colEnd: number[] = [];
  const placed: { event: ScheduleEvent; col: number }[] = [];

  for (const ev of sorted) {
    const start = toMinutes(ev.startTime);
    let col = colEnd.findIndex((end) => end <= start);
    if (col === -1) col = colEnd.length;
    colEnd[col] = toMinutes(ev.endTime);
    placed.push({ event: ev, col });
  }

  const numCols = colEnd.length;
  return placed.map((p) => ({ ...p, numCols }));
}

// --- ScheduleView -------------------------------------------------------------

export default function ScheduleView() {
  const { trainers, locations, events, loading, error, refetch } = useSupabaseSchedule();
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'day';
    }
    return 'month';
  });
  const [currentDate, setCurrentDate] = useState(new Date());

  const [activeTrainers, setActiveTrainers] = useState<Set<string>>(new Set());
  const [activeLocations, setActiveLocations] = useState<Set<string>>(new Set());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState<ScheduleEvent | null>(null);
  const [dialogDate, setDialogDate] = useState('');
  const [dialogStartTime, setDialogStartTime] = useState('');

  const todayStr = localDateStr(new Date());

  const visibleDays = useMemo(() => {
    if (viewMode === 'day') return [localDateStr(currentDate)];
    if (viewMode === 'week') return getWeekDaysFromDate(currentDate);
    return [];
  }, [viewMode, currentDate]);

  const periodLabel = useMemo(
    () => formatPeriodLabel(viewMode, currentDate, visibleDays),
    [viewMode, currentDate, visibleDays],
  );

  const monthGridDays = useMemo(
    () => (viewMode === 'month' ? getMonthGridDays(currentDate) : []),
    [viewMode, currentDate],
  );

  const now = new Date();
  const nowTop = ((now.getHours() * 60 + now.getMinutes() - GRID_START * 60) / 60) * HOUR_H;
  const showNowLine = nowTop >= 0 && nowTop <= HOURS.length * HOUR_H;

  function openDialog(date: string, startTime: string) {
    setEventToEdit(null);
    setDialogDate(date);
    setDialogStartTime(startTime);
    setDialogOpen(true);
  }

  function openEditDialog(event: ScheduleEvent) {
    setEventToEdit(event);
    setDialogDate(event.date);
    setDialogStartTime(event.startTime);
    setDialogOpen(true);
  }

  function handleDialogOpenChange(open: boolean) {
    setDialogOpen(open);
    if (!open) setEventToEdit(null);
  }

  function toggleSet<T>(prev: Set<T>, val: T): Set<T> {
    const next = new Set(prev);
    next.has(val) ? next.delete(val) : next.add(val);
    return next;
  }

  function goToToday() {
    setCurrentDate(new Date());
  }

  function shiftPeriod(delta: number) {
    setCurrentDate((prev) => {
      const next = new Date(prev);
      if (viewMode === 'month') next.setMonth(next.getMonth() + delta);
      else if (viewMode === 'week') next.setDate(next.getDate() + delta * 7);
      else next.setDate(next.getDate() + delta);
      return next;
    });
  }

  const filteredEvents = useMemo(
    () =>
      events.filter((e) => {
        if (activeTrainers.size > 0 && !activeTrainers.has(e.trainerId)) return false;
        if (activeLocations.size > 0 && !activeLocations.has(e.locationId)) return false;
        return true;
      }),
    [events, activeTrainers, activeLocations],
  );

  const eventsByDate = useMemo(() => {
    const map: Record<string, ScheduleEvent[]> = {};
    for (const ev of filteredEvents) {
      if (!map[ev.date]) map[ev.date] = [];
      map[ev.date].push(ev);
    }
    for (const key of Object.keys(map)) {
      map[key].sort((a, b) => a.startTime.localeCompare(b.startTime));
    }
    return map;
  }, [filteredEvents]);

  const layoutsByDay = useMemo(() => {
    if (viewMode === 'month') return {} as Record<string, EventLayout[]>;
    const map: Record<string, EventLayout[]> = {};
    visibleDays.forEach((d) => {
      map[d] = layoutDay(eventsByDate[d] ?? []);
    });
    return map;
  }, [viewMode, eventsByDate, visibleDays]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-lg" />
            <div className="space-y-1">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-3 w-52" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-8 w-24" />
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="flex border-b">
              <div className="w-14 shrink-0 border-r bg-muted/30" />
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex-1 py-3 flex flex-col items-center gap-1 border-r last:border-r-0">
                  <Skeleton className="h-3 w-6" />
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <Skeleton className="h-2 w-5" />
                </div>
              ))}
            </div>
            <div className="flex" style={{ height: 8 * HOUR_H }}>
              <div className="w-14 shrink-0 border-r bg-muted/10" />
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex-1 border-r last:border-r-0 relative p-1.5">
                  {i % 2 === 0 && (
                    <Skeleton className="absolute rounded" style={{ top: HOUR_H * 1.8, left: 4, right: 4, height: HOUR_H }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-destructive/10">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-base">Nie udało się pobrać danych</p>
            <p className="text-sm text-muted-foreground mt-1">{error}</p>
          </div>
          <Button variant="outline" onClick={refetch} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Spróbuj ponownie
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Grafik zajęć</h1>
              <p className="text-sm text-muted-foreground">Szczek Szczek - panel wewnętrzny</p>
            </div>
          </div>
          <Button className="gap-2 self-start sm:self-auto" onClick={() => openDialog(todayStr, '09:00')}>
            <Plus className="h-4 w-4" />
            Dodaj zajęcia
          </Button>
        </div>

        <Separator />

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1" onClick={() => shiftPeriod(-1)}>
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Poprzedni</span>
            </Button>

            <Button variant="outline" size="sm" onClick={goToToday}>
              Dzisiaj
            </Button>

            <Button variant="outline" size="sm" className="gap-1" onClick={() => shiftPeriod(1)}>
              <span className="hidden sm:inline">Następny</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="font-semibold text-sm sm:text-base text-center">{periodLabel}</p>

          <div className="inline-flex rounded-md border bg-background p-1 self-start lg:self-auto">
            {([
              { value: 'day', label: 'Dzień' },
              { value: 'week', label: 'Tydzień' },
              { value: 'month', label: 'Miesiąc' },
            ] as Array<{ value: ViewMode; label: string }>).map((item) => {
              const active = viewMode === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  className={cn(
                    'px-3 py-1.5 text-xs sm:text-sm rounded transition-colors',
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent',
                  )}
                  onClick={() => setViewMode(item.value)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium w-20 shrink-0">Trenerka:</span>
            {trainers.map((t) => {
              const c = TRAINER_FILTER_COLORS[t.colorCode];
              const active = activeTrainers.has(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTrainers(toggleSet(activeTrainers, t.id))}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-medium transition-all"
                  style={
                    active
                      ? { backgroundColor: c.solid, color: '#fff', borderColor: c.solid }
                      : { backgroundColor: c.light, color: c.text, borderColor: c.border }
                  }
                >
                  <span
                    className="h-2 w-2 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: active ? '#fff' : c.solid }}
                  />
                  {t.name}
                </button>
              );
            })}
            {activeTrainers.size > 0 && (
              <button
                onClick={() => setActiveTrainers(new Set())}
                className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
              >
                wyczyść
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium w-20 shrink-0">Lokalizacja:</span>
            {locations.map((l) => {
              const active = activeLocations.has(l.id);
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveLocations(toggleSet(activeLocations, l.id))}
                  className={
                    active
                      ? 'inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium bg-foreground text-background border-foreground transition-all'
                      : 'inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground transition-all'
                  }
                >
                  {l.name}
                </button>
              );
            })}
            {activeLocations.size > 0 && (
              <button
                onClick={() => setActiveLocations(new Set())}
                className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
              >
                wyczyść
              </button>
            )}
          </div>
        </div>

        {viewMode === 'month' && (
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="grid grid-cols-7 border-b bg-muted/20">
              {DAYS_PL.map((day) => (
                <div key={day} className="px-2 py-2 text-center text-xs font-semibold text-muted-foreground border-r last:border-r-0">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {monthGridDays.map((day, idx) => {
                const dateStr = localDateStr(day);
                const dayEvents = eventsByDate[dateStr] ?? [];
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isToday = dateStr === todayStr;
                const visibleDayEvents = dayEvents.slice(0, 4);
                const remaining = dayEvents.length - visibleDayEvents.length;

                return (
                  <div
                    key={`${dateStr}-${idx}`}
                    className={cn(
                      'min-h-[132px] border-r border-b p-1.5 sm:p-2 align-top',
                      !isCurrentMonth && 'bg-muted/20',
                      isToday && 'bg-primary/[0.05]',
                    )}
                    onDoubleClick={() => openDialog(dateStr, '09:00')}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span
                        className={cn(
                          'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold',
                          isToday
                            ? 'bg-primary text-primary-foreground'
                            : isCurrentMonth
                              ? 'text-foreground'
                              : 'text-muted-foreground',
                        )}
                      >
                        {day.getDate()}
                      </span>
                    </div>

                    <div className="space-y-1 overflow-y-auto max-h-[92px] pr-0.5">
                      {visibleDayEvents.map((ev) => {
                        const trainer = trainers.find((t) => t.id === ev.trainerId);
                        const color = trainer ? TRAINER_FILTER_COLORS[trainer.colorCode] : null;
                        return (
                          <button
                            key={ev.id}
                            type="button"
                            onClick={() => openEditDialog(ev)}
                            className="w-full rounded px-1.5 py-1 text-left text-[11px] leading-tight transition-colors hover:brightness-95"
                            style={{
                              backgroundColor: color?.light ?? '#e2e8f0',
                              color: color?.text ?? '#334155',
                              borderLeft: `3px solid ${color?.solid ?? '#94a3b8'}`,
                            }}
                            title={`${ev.startTime} ${ev.title}`}
                          >
                            <span className="font-medium">{ev.startTime}</span> {ev.title}
                          </button>
                        );
                      })}

                      {remaining > 0 && (
                        <p className="text-[11px] text-muted-foreground px-1">+{remaining} więcej</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {viewMode !== 'month' && (
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="flex sticky top-0 z-20 border-b bg-card shadow-sm">
              <div className="w-14 shrink-0 border-r bg-muted/30" />
              {visibleDays.map((dateStr) => {
                const date = parseLocalDate(dateStr);
                const dow = (date.getDay() + 6) % 7;
                const isToday = dateStr === todayStr;
                return (
                  <div
                    key={dateStr}
                    className={cn('flex-1 min-w-0 py-2 text-center border-r last:border-r-0', isToday && 'bg-primary/5')}
                  >
                    <p className={cn('text-xs font-medium text-muted-foreground', isToday && 'text-primary')}>
                      {DAYS_PL[dow]}
                    </p>
                    <div
                      className={cn(
                        'w-7 h-7 mx-auto mt-0.5 flex items-center justify-center rounded-full text-sm font-semibold',
                        isToday ? 'bg-primary text-primary-foreground' : 'text-foreground',
                      )}
                    >
                      {date.getDate()}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">{MONTHS_PL_SHORT[date.getMonth()]}</p>
                  </div>
                );
              })}
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
              <div className="flex">
                <div className="w-14 shrink-0 border-r bg-muted/10 relative" style={{ height: HOURS.length * HOUR_H }}>
                  {HOURS.map((h) => (
                    <div
                      key={h}
                      className="absolute w-full flex justify-end pr-2"
                      style={{ top: (h - GRID_START) * HOUR_H - 8, height: HOUR_H }}
                    >
                      <span className="text-[10px] text-muted-foreground font-mono pt-1">{String(h).padStart(2, '0')}:00</span>
                    </div>
                  ))}
                </div>

                {visibleDays.map((dateStr) => {
                  const isToday = dateStr === todayStr;
                  return (
                    <div
                      key={dateStr}
                      className={cn('flex-1 min-w-0 relative border-r last:border-r-0', isToday && 'bg-primary/[0.025]')}
                      style={{ height: HOURS.length * HOUR_H }}
                    >
                      {HOURS.map((h) => (
                        <div
                          key={h}
                          className="absolute w-full border-t border-border/40 hover:bg-accent/30 cursor-pointer group transition-colors"
                          style={{ top: (h - GRID_START) * HOUR_H, height: HOUR_H }}
                          onClick={() => openDialog(dateStr, `${String(h).padStart(2, '0')}:00`)}
                        >
                          <div className="absolute w-full border-t border-border/20 pointer-events-none" style={{ top: HOUR_H / 2 }} />
                          <span className="absolute left-1 top-0.5 text-[9px] font-mono text-transparent group-hover:text-muted-foreground/50 transition-colors pointer-events-none select-none">
                            {String(h).padStart(2, '0')}:00
                          </span>
                        </div>
                      ))}

                      {isToday && showNowLine && (
                        <div className="absolute left-0 right-0 z-20 flex items-center pointer-events-none" style={{ top: nowTop - 1 }}>
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0 -ml-1.5" />
                          <div className="flex-1 h-0.5 bg-rose-500" />
                        </div>
                      )}

                      {layoutsByDay[dateStr]?.map((layout) => (
                        <ScheduleEventBlock
                          key={layout.event.id}
                          layout={layout}
                          trainer={trainers.find((t) => t.id === layout.event.trainerId)}
                          onEdit={openEditDialog}
                          onEventDeleted={refetch}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <AddEventDialog
        trainers={trainers}
        locations={locations}
        open={dialogOpen}
        onOpenChange={handleDialogOpenChange}
        onEventChanged={refetch}
        eventToEdit={eventToEdit}
        defaultDate={dialogDate}
        defaultStartTime={dialogStartTime}
      />
    </div>
  );
}
