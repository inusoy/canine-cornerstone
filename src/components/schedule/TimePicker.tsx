import { useRef } from 'react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

// Every 30 minutes from 06:00 to 22:00
const SLOTS: string[] = Array.from({ length: (22 - 6) * 2 + 1 }, (_, i) => {
  const totalMins = 6 * 60 + i * 30;
  const h = String(Math.floor(totalMins / 60)).padStart(2, '0');
  const m = String(totalMins % 60).padStart(2, '0');
  return `${h}:${m}`;
});

interface TimePickerProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export function TimePicker({ id, value, onChange }: TimePickerProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  function handleOpenChange(open: boolean) {
    if (open) {
      requestAnimationFrame(() => {
        activeRef.current?.scrollIntoView({ block: 'center', behavior: 'instant' });
      });
    }
  }

  return (
    <div className="flex gap-1.5">
      <Input
        id={id}
        type="text"
        placeholder="09:00"
        value={value}
        maxLength={5}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 font-mono"
      />
      <Popover onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" type="button" className="h-9 w-9 shrink-0">
            <Clock className="h-4 w-4" />
            <span className="sr-only">Wybierz godzinę</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-28 p-1" align="end">
          <ScrollArea className="h-52">
            <div className="flex flex-col gap-0.5 pr-2">
              {SLOTS.map((slot) => {
                const isActive = value === slot;
                return (
                  <button
                    key={slot}
                    ref={isActive ? activeRef : undefined}
                    type="button"
                    onClick={() => onChange(slot)}
                    className={cn(
                      'text-sm rounded px-2 py-1.5 text-left font-mono transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'hover:bg-accent hover:text-accent-foreground text-foreground',
                    )}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
