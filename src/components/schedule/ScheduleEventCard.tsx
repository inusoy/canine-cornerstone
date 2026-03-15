import { Clock, MapPin, Dog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { ScheduleEvent, Trainer, Location } from '@/types/schedule';

// ─── Color palettes ───────────────────────────────────────────────────────────

const TRAINER_PALETTE = {
  rose: {
    solid:  '#f43f5e',
    light:  '#ffe4e6',
    text:   '#9f1239',
    border: '#fecdd3',
  },
  emerald: {
    solid:  '#10b981',
    light:  '#d1fae5',
    text:   '#064e3b',
    border: '#a7f3d0',
  },
  violet: {
    solid:  '#8b5cf6',
    light:  '#ede9fe',
    text:   '#4c1d95',
    border: '#ddd6fe',
  },
} as const;

const LOCATION_PALETTE: Record<string, { light: string; text: string; border: string }> = {
  main:           { light: '#dbeafe', text: '#1e3a8a', border: '#bfdbfe' },
  outdoor_rental: { light: '#fef9c3', text: '#713f12', border: '#fde68a' },
  field:          { light: '#ccfbf1', text: '#134e4a', border: '#99f6e4' },
};

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  event: ScheduleEvent;
  trainer: Trainer | undefined;
  location: Location | undefined;
}

export function ScheduleEventCard({ event, trainer, location }: Props) {
  const trainerColors = trainer ? TRAINER_PALETTE[trainer.colorCode] : null;
  const locationColors = location ? (LOCATION_PALETTE[location.type] ?? LOCATION_PALETTE.main) : null;

  return (
    <Card className={cn('flex overflow-hidden transition-shadow hover:shadow-md')}>
      {/* Colored left accent bar */}
      <div
        className="w-1.5 flex-shrink-0"
        style={{ backgroundColor: trainerColors?.solid ?? '#94a3b8' }}
      />

      <div className="flex-1 min-w-0 p-3 sm:p-4 space-y-2.5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base leading-tight truncate">
              {event.title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
              <Clock className="h-3 w-3 flex-shrink-0" />
              <span>{event.startTime}&nbsp;–&nbsp;{event.endTime}</span>
            </div>
          </div>

          {event.isExternalRent && (
            <Badge
              variant="outline"
              className="flex-shrink-0 text-xs bg-slate-50 text-slate-600 border-slate-300"
            >
              Wynajem zewnętrzny
            </Badge>
          )}
        </div>

        {/* Badges row: trainer + location */}
        <div className="flex flex-wrap items-center gap-1.5">
          {trainer && trainerColors && (
            <span className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: trainerColors.light,
                color: trainerColors.text,
                borderColor: trainerColors.border,
              }}
            >
              <Avatar className="h-4 w-4">
                <AvatarFallback
                  className="text-[9px] font-bold"
                  style={{ backgroundColor: trainerColors.solid, color: '#fff' }}
                >
                  {trainer.initials}
                </AvatarFallback>
              </Avatar>
              {trainer.name}
            </span>
          )}

          {location && locationColors && (
            <span
              className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: locationColors.light,
                color: locationColors.text,
                borderColor: locationColors.border,
              }}
            >
              <MapPin className="h-2.5 w-2.5" />
              {location.name}
            </span>
          )}
        </div>

        {/* Dogs list */}
        {event.dogsList.length > 0 && (
          <div className="flex items-start gap-1.5">
            <Dog className="h-3.5 w-3.5 mt-px text-muted-foreground flex-shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {event.dogsList.join(', ')}
              <span className="ml-1.5 font-semibold text-foreground/70">
                ({event.dogsList.length})
              </span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
