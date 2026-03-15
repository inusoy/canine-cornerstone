import { CalendarDays } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScheduleEventCard } from './ScheduleEventCard';
import type { ScheduleEvent, Trainer, Location } from '@/types/schedule';

const DAYS_PL = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const MONTHS_PL = [
  'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
  'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia',
];

function formatDayHeader(dateStr: string): { dayName: string; dayDate: string; isToday: boolean } {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  const today = new Date();
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  return {
    dayName: DAYS_PL[date.getDay()],
    dayDate: `${d} ${MONTHS_PL[m - 1]} ${y}`,
    isToday,
  };
}

interface Props {
  dateStr: string;
  events: ScheduleEvent[];
  trainers: Trainer[];
  locations: Location[];
}

export function DaySection({ dateStr, events, trainers, locations }: Props) {
  const { dayName, dayDate, isToday } = formatDayHeader(dateStr);

  const sortedEvents = [...events].sort((a, b) =>
    a.startTime.localeCompare(b.startTime),
  );

  const findTrainer = (id: string) => trainers.find((t) => t.id === id);
  const findLocation = (id: string) => locations.find((l) => l.id === id);

  return (
    <section>
      {/* Day header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">
            {dayName}
            {isToday && (
              <span className="ml-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                Dziś
              </span>
            )}
          </h2>
        </div>
        <span className="text-sm text-muted-foreground">{dayDate}</span>
        {events.length > 0 && (
          <span className="ml-auto text-xs text-muted-foreground">
            {events.length} {events.length === 1 ? 'zajęcie' : events.length < 5 ? 'zajęcia' : 'zajęć'}
          </span>
        )}
      </div>

      <Separator className="mb-4" />

      {/* Events or empty state */}
      {sortedEvents.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-2 pl-1">Brak zajęć w tym dniu</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event) => (
            <ScheduleEventCard
              key={event.id}
              event={event}
              trainer={findTrainer(event.trainerId)}
              location={findLocation(event.locationId)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
