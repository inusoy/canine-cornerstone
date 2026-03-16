import { useState } from 'react';
import { Loader2, Pencil, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { EVENT_STATUS_CONFIG, TRAINER_LEFT_BORDER_CLASS } from '@/config/event-status';
import { supabase } from '@/lib/supabase';
import type { ScheduleEvent, Trainer } from '@/types/schedule';

const GRID_START = 7;
const GRID_END = 22;
const HOUR_H = 64;

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

export interface EventLayout {
  event: ScheduleEvent;
  col: number;
  numCols: number;
}

interface ScheduleEventBlockProps {
  layout: EventLayout;
  trainer: Trainer | undefined;
  onEdit: (event: ScheduleEvent) => void;
  onEventDeleted: () => void;
}

export function ScheduleEventBlock({
  layout,
  trainer,
  onEdit,
  onEventDeleted,
}: ScheduleEventBlockProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const { event, col, numCols } = layout;
  const startM = Math.max(toMinutes(event.startTime), GRID_START * 60) - GRID_START * 60;
  const endM = Math.min(toMinutes(event.endTime), GRID_END * 60) - GRID_START * 60;
  const top = (startM / 60) * HOUR_H;
  const height = Math.max(((endM - startM) / 60) * HOUR_H, 20);
  const statusConfig = EVENT_STATUS_CONFIG[event.status];
  const trainerBorderClass = trainer ? TRAINER_LEFT_BORDER_CLASS[trainer.colorCode] : 'border-l-4 border-l-slate-400';

  async function handleDelete() {
    setIsDeleting(true);

    const { error } = await supabase.from('events').delete().eq('id', event.id);

    if (error) {
      setIsDeleting(false);
      toast({
        variant: 'destructive',
        title: 'Nie udało się usunąć zajęć',
        description: error.message,
      });
      return;
    }

    toast({
      title: 'Zajęcia usunięte',
      description: 'Wydarzenie zostało usunięte z grafiku.',
    });
    onEventDeleted();
    setIsDeleting(false);
  }

  return (
    <div
      className={[
        'absolute z-10 rounded overflow-hidden text-[11px] leading-tight cursor-pointer select-none border',
        statusConfig.blockClass,
        trainerBorderClass,
      ].join(' ')}
      style={{
        top,
        height,
        left: `calc(${(col / numCols) * 100}% + 2px)`,
        width: `calc(${(1 / numCols) * 100}% - 4px)`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onEdit(event);
      }}
    >
      <div className="px-1.5 py-1 overflow-hidden h-full flex flex-col">
        <div className="flex items-start justify-between gap-1">
          <span className="font-semibold truncate pr-1">{event.title}</span>
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              type="button"
              className="rounded p-0.5 opacity-60 transition hover:bg-black/5 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(event);
              }}
              aria-label="Edytuj zajęcia"
            >
              <Pencil className="h-3 w-3" />
            </button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="shrink-0 rounded p-0.5 opacity-60 transition hover:bg-black/5 hover:opacity-100"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Usuń zajęcia"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Czy na pewno chcesz usunąć te zajęcia?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Ta operacja usunie wydarzenie "{event.title}" z grafiku i nie będzie można jej cofnąć.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isDeleting}>Anuluj</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    {isDeleting && <Loader2 className="h-4 w-4 animate-spin" />}
                    Usuń zajęcia
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        {height >= 30 && (
          <Badge variant="outline" className={`w-fit px-1.5 py-0 text-[10px] leading-none ${statusConfig.badgeClass}`}>
            {statusConfig.label}
          </Badge>
        )}
        {height >= 36 && <span className="opacity-70 truncate">{event.startTime}–{event.endTime}</span>}
        {height >= 52 && trainer && <span className="opacity-60 truncate mt-auto">{trainer.initials}</span>}
      </div>
    </div>
  );
}
