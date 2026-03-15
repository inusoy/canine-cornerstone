import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { TimePicker } from './TimePicker';
import type { Trainer, Location } from '@/types/schedule';

function addOneHour(time: string): string {
  if (!time || !time.includes(':')) return '';
  const [h, m] = time.split(':').map(Number);
  const newH = Math.min(h + 1, 22);
  return `${String(newH).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

interface Props {
  trainers: Trainer[];
  locations: Location[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultDate?: string;
  defaultStartTime?: string;
}

export function AddEventDialog({
  trainers,
  locations,
  open,
  onOpenChange,
  defaultDate = '',
  defaultStartTime = '',
}: Props) {
  const [title, setTitle]         = useState('');
  const [date, setDate]           = useState(defaultDate);
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [endTime, setEndTime]     = useState(addOneHour(defaultStartTime));
  const [trainerId, setTrainerId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [dogs, setDogs]           = useState('');

  // Reset form every time the dialog opens with (potentially new) default values
  useEffect(() => {
    if (open) {
      setTitle('');
      setDate(defaultDate);
      setStartTime(defaultStartTime);
      setEndTime(addOneHour(defaultStartTime));
      setTrainerId('');
      setLocationId('');
      setDogs('');
    }
  }, [open, defaultDate, defaultStartTime]);

  function handleStartTimeChange(value: string) {
    setStartTime(value);
    setEndTime(addOneHour(value));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nowe zajęcia</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="ev-title">Nazwa zajęć</Label>
            <Input
              id="ev-title"
              placeholder="np. Nosework – poziom 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <Label htmlFor="ev-date">Data</Label>
            <Input
              id="ev-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time range */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="ev-start">Rozpoczęcie</Label>
              <TimePicker id="ev-start" value={startTime} onChange={handleStartTimeChange} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ev-end">Zakończenie</Label>
              <TimePicker id="ev-end" value={endTime} onChange={setEndTime} />
            </div>
          </div>

          <Separator />

          {/* Trainer */}
          <div className="space-y-1.5">
            <Label>Trenerka</Label>
            <Select value={trainerId} onValueChange={setTrainerId}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz trenerkę" />
              </SelectTrigger>
              <SelectContent>
                {trainers.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <Label>Lokalizacja</Label>
            <Select value={locationId} onValueChange={setLocationId}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz lokalizację" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((l) => (
                  <SelectItem key={l.id} value={l.id}>
                    {l.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dogs */}
          <div className="space-y-1.5">
            <Label htmlFor="ev-dogs">Psy (oddzielone przecinkami)</Label>
            <Input
              id="ev-dogs"
              placeholder="np. Burek, Luna, Max"
              value={dogs}
              onChange={(e) => setDogs(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Anuluj
          </Button>
          <Button onClick={() => onOpenChange(false)}>Zapisz zajęcia</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
