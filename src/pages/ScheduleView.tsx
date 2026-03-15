import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AddEventDialog } from '@/components/schedule/AddEventDialog';
import { TRAINERS, LOCATIONS, MOCK_EVENTS } from '@/data/scheduleData';
import type { ScheduleEvent, Trainer } from '@/types/schedule';
import { cn } from '@/lib/utils';

// ─── Grid constants ───────────────────────────────────────────────────────────

const GRID_START = 7;   // first visible hour (07:00)
const GRID_END   = 22;  // one past last hour row  (22:00 label shown at top of last row)
const HOUR_H     = 64;  // pixels per hour
const HOURS      = Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i);

// ─── Date helpers ─────────────────────────────────────────────────────────────

const DAYS_PL   = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
const MONTHS_PL = ['sty','lut','mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru'];

/** Local-timezone YYYY-MM-DD – avoids UTC midnight shift from toISOString() */
function localDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getMondayOfWeek(weekOffset: number): Date {
  const today = new Date();
  const dow = today.getDay(); // 0 = Sunday
  const daysToMon = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(today);
  monday.setDate(today.getDate() + daysToMon + weekOffset * 7);
  return monday;
}

function getWeekDays(weekOffset: number): string[] {
  const monday = getMondayOfWeek(weekOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return localDateStr(d);
  });
}

function formatWeekLabel(days: string[]): string {
  const p = (s: string) => { const [y, m, d] = s.split('-').map(Number); return { y, m, d }; };
  const f = p(days[0]);
  const l = p(days[6]);
  if (f.m === l.m && f.y === l.y) return `${f.d}–${l.d} ${MONTHS_PL[f.m - 1]} ${f.y}`;
  return `${f.d} ${MONTHS_PL[f.m - 1]} – ${l.d} ${MONTHS_PL[l.m - 1]} ${l.y}`;
}

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

// ─── Trainer color palette ────────────────────────────────────────────────────

const COLORS = {
  rose:    { solid: '#f43f5e', light: '#ffe4e6', text: '#9f1239', border: '#fecdd3' },
  emerald: { solid: '#10b981', light: '#d1fae5', text: '#064e3b', border: '#a7f3d0' },
  violet:  { solid: '#8b5cf6', light: '#ede9fe', text: '#4c1d95', border: '#ddd6fe' },
} as const;

// ─── Event layout (greedy interval-graph column assignment) ───────────────────

type EventLayout = { event: ScheduleEvent; col: number; numCols: number };

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

// ─── EventBlock ───────────────────────────────────────────────────────────────

function EventBlock({ layout, trainer }: { layout: EventLayout; trainer: Trainer | undefined }) {
  const { event, col, numCols } = layout;
  const startM = Math.max(toMinutes(event.startTime), GRID_START * 60) - GRID_START * 60;
  const endM   = Math.min(toMinutes(event.endTime),   GRID_END   * 60) - GRID_START * 60;
  const top    = (startM / 60) * HOUR_H;
  const height = Math.max(((endM - startM) / 60) * HOUR_H, 20);
  const c = trainer ? COLORS[trainer.colorCode] : null;

  return (
    <div
      className="absolute z-10 rounded overflow-hidden text-[11px] leading-tight cursor-pointer select-none border"
      style={{
        top,
        height,
        left:            `calc(${(col / numCols) * 100}% + 2px)`,
        width:           `calc(${(1 / numCols) * 100}% - 4px)`,
        backgroundColor: c?.light  ?? '#f1f5f9',
        borderColor:     c?.border ?? '#e2e8f0',
        borderLeftWidth: '3px',
        borderLeftColor: c?.solid  ?? '#94a3b8',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="px-1.5 py-1 overflow-hidden h-full flex flex-col"
        style={{ color: c?.text ?? '#334155' }}
      >
        <span className="font-semibold truncate">{event.title}</span>
        {height >= 36 && (
          <span className="opacity-70 truncate">{event.startTime}–{event.endTime}</span>
        )}
        {height >= 52 && trainer && (
          <span className="opacity-60 truncate mt-auto">{trainer.initials}</span>
        )}
      </div>
    </div>
  );
}

// ─── ScheduleView ─────────────────────────────────────────────────────────────

export default function ScheduleView() {
  const [weekOffset, setWeekOffset]           = useState(0);
  const [activeTrainers, setActiveTrainers]   = useState<Set<string>>(new Set());
  const [activeLocations, setActiveLocations] = useState<Set<string>>(new Set());
  const [dialogOpen, setDialogOpen]           = useState(false);
  const [dialogDate, setDialogDate]           = useState('');
  const [dialogStartTime, setDialogStartTime] = useState('');

  const todayStr  = localDateStr(new Date());
  const weekDays  = useMemo(() => getWeekDays(weekOffset), [weekOffset]);
  const weekLabel = formatWeekLabel(weekDays);

  // Current time indicator
  const now         = new Date();
  const nowTop      = ((now.getHours() * 60 + now.getMinutes() - GRID_START * 60) / 60) * HOUR_H;
  const showNowLine = nowTop >= 0 && nowTop <= HOURS.length * HOUR_H;

  function openDialog(date: string, startTime: string) {
    setDialogDate(date);
    setDialogStartTime(startTime);
    setDialogOpen(true);
  }

  function toggleSet<T>(prev: Set<T>, val: T): Set<T> {
    const next = new Set(prev);
    next.has(val) ? next.delete(val) : next.add(val);
    return next;
  }

  const filteredEvents = useMemo(
    () =>
      MOCK_EVENTS.filter((e) => {
        if (activeTrainers.size > 0 && !activeTrainers.has(e.trainerId)) return false;
        if (activeLocations.size > 0 && !activeLocations.has(e.locationId)) return false;
        return true;
      }),
    [activeTrainers, activeLocations],
  );

  const eventsByDay = useMemo(() => {
    const map: Record<string, ScheduleEvent[]> = {};
    weekDays.forEach((d) => (map[d] = []));
    filteredEvents.forEach((e) => {
      if (map[e.date]) map[e.date].push(e);
    });
    return map;
  }, [filteredEvents, weekDays]);

  const layoutsByDay = useMemo(() => {
    const map: Record<string, EventLayout[]> = {};
    weekDays.forEach((d) => (map[d] = layoutDay(eventsByDay[d])));
    return map;
  }, [eventsByDay, weekDays]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-4">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Grafik zajęć</h1>
              <p className="text-sm text-muted-foreground">Szczek Szczek – panel wewnętrzny</p>
            </div>
          </div>
          <Button
            className="gap-2 self-start sm:self-auto"
            onClick={() => openDialog(todayStr, '09:00')}
          >
            <Plus className="h-4 w-4" />
            Dodaj zajęcia
          </Button>
        </div>

        <Separator />

        {/* ── Week navigation ── */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setWeekOffset((o) => o - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Poprzedni</span>
          </Button>

          <div className="text-center">
            <p className="font-semibold text-sm sm:text-base">{weekLabel}</p>
            {weekOffset !== 0 && (
              <button
                className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground mt-0.5 block mx-auto"
                onClick={() => setWeekOffset(0)}
              >
                Bieżący tydzień
              </button>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setWeekOffset((o) => o + 1)}
          >
            <span className="hidden sm:inline">Następny</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* ── Filters ── */}
        <div className="space-y-2">
          {/* Trainer filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium w-20 shrink-0">Trenerka:</span>
            {TRAINERS.map((t) => {
              const c = COLORS[t.colorCode];
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

          {/* Location filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium w-20 shrink-0">Lokalizacja:</span>
            {LOCATIONS.map((l) => {
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

        {/* ── Calendar grid ── */}
        <div className="border rounded-lg overflow-hidden bg-card">

          {/* Sticky day header row */}
          <div className="flex sticky top-0 z-20 border-b bg-card shadow-sm">
            <div className="w-14 shrink-0 border-r bg-muted/30" />
            {weekDays.map((dateStr, i) => {
              const [, m, d] = dateStr.split('-').map(Number);
              const isToday = dateStr === todayStr;
              return (
                <div
                  key={dateStr}
                  className={cn(
                    'flex-1 min-w-0 py-2 text-center border-r last:border-r-0',
                    isToday && 'bg-primary/5',
                  )}
                >
                  <p className={cn('text-xs font-medium text-muted-foreground', isToday && 'text-primary')}>
                    {DAYS_PL[i]}
                  </p>
                  <div
                    className={cn(
                      'w-7 h-7 mx-auto mt-0.5 flex items-center justify-center rounded-full text-sm font-semibold',
                      isToday ? 'bg-primary text-primary-foreground' : 'text-foreground',
                    )}
                  >
                    {d}
                  </div>
                  <p className="text-[10px] text-muted-foreground/60 mt-0.5">{MONTHS_PL[m - 1]}</p>
                </div>
              );
            })}
          </div>

          {/* Scrollable grid body */}
          <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <div className="flex">

              {/* Time gutter */}
              <div
                className="w-14 shrink-0 border-r bg-muted/10 relative"
                style={{ height: HOURS.length * HOUR_H }}
              >
                {HOURS.map((h) => (
                  <div
                    key={h}
                    className="absolute w-full flex justify-end pr-2"
                    style={{ top: (h - GRID_START) * HOUR_H - 8, height: HOUR_H }}
                  >
                    <span className="text-[10px] text-muted-foreground font-mono pt-1">
                      {String(h).padStart(2, '0')}:00
                    </span>
                  </div>
                ))}
              </div>

              {/* Day columns */}
              {weekDays.map((dateStr) => {
                const isToday = dateStr === todayStr;
                return (
                  <div
                    key={dateStr}
                    className={cn(
                      'flex-1 min-w-0 relative border-r last:border-r-0',
                      isToday && 'bg-primary/[0.025]',
                    )}
                    style={{ height: HOURS.length * HOUR_H }}
                  >
                    {/* Clickable hour slots */}
                    {HOURS.map((h) => (
                      <div
                        key={h}
                        className="absolute w-full border-t border-border/40 hover:bg-accent/30 cursor-pointer group transition-colors"
                        style={{ top: (h - GRID_START) * HOUR_H, height: HOUR_H }}
                        onClick={() => openDialog(dateStr, `${String(h).padStart(2, '0')}:00`)}
                      >
                        {/* Half-hour divider */}
                        <div
                          className="absolute w-full border-t border-border/20 pointer-events-none"
                          style={{ top: HOUR_H / 2 }}
                        />
                        {/* Hover time hint */}
                        <span className="absolute left-1 top-0.5 text-[9px] font-mono text-transparent group-hover:text-muted-foreground/50 transition-colors pointer-events-none select-none">
                          {String(h).padStart(2, '0')}:00
                        </span>
                      </div>
                    ))}

                    {/* Current time indicator */}
                    {isToday && showNowLine && (
                      <div
                        className="absolute left-0 right-0 z-20 flex items-center pointer-events-none"
                        style={{ top: nowTop - 1 }}
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0 -ml-1.5" />
                        <div className="flex-1 h-0.5 bg-rose-500" />
                      </div>
                    )}

                    {/* Event blocks */}
                    {layoutsByDay[dateStr]?.map((layout) => (
                      <EventBlock
                        key={layout.event.id}
                        layout={layout}
                        trainer={TRAINERS.find((t) => t.id === layout.event.trainerId)}
                      />
                    ))}
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>

      {/* Controlled add-event dialog */}
      <AddEventDialog
        trainers={TRAINERS}
        locations={LOCATIONS}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultDate={dialogDate}
        defaultStartTime={dialogStartTime}
      />
    </div>
  );
}
