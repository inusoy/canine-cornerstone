import { FormEvent, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';
import { TimePicker } from './TimePicker';
import type { Trainer, Location, ScheduleEvent } from '@/types/schedule';

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
  onEventChanged: () => void;
  eventToEdit?: ScheduleEvent | null;
  defaultDate?: string;
  defaultStartTime?: string;
}

export function AddEventDialog({
  trainers,
  locations,
  open,
  onOpenChange,
  onEventChanged,
  eventToEdit,
  defaultDate = '',
  defaultStartTime = '',
}: Props) {
  const { toast } = useToast();
  const [title, setTitle]         = useState('');
  const [date, setDate]           = useState(defaultDate);
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [endTime, setEndTime]     = useState(addOneHour(defaultStartTime));
  const [trainerId, setTrainerId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [dogs, setDogs]           = useState('');
  const [isExternalRent, setIsExternalRent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = Boolean(eventToEdit);

  // Reset/fill form every time the dialog opens with new defaults or edited event
  useEffect(() => {
    if (open) {
      if (eventToEdit) {
        setTitle(eventToEdit.title);
        setDate(eventToEdit.date);
        setStartTime(eventToEdit.startTime);
        setEndTime(eventToEdit.endTime);
        setTrainerId(eventToEdit.trainerId);
        setLocationId(eventToEdit.locationId);
        setDogs(eventToEdit.dogsList.join(', '));
        setIsExternalRent(eventToEdit.isExternalRent);
      } else {
        setTitle('');
        setDate(defaultDate);
        setStartTime(defaultStartTime);
        setEndTime(addOneHour(defaultStartTime));
        setTrainerId('');
        setLocationId('');
        setDogs('');
        setIsExternalRent(false);
      }
      setIsSubmitting(false);
    }
  }, [open, defaultDate, defaultStartTime, eventToEdit]);

  function handleStartTimeChange(value: string) {
    setStartTime(value);
    setEndTime(addOneHour(value));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTitle = title.trim();
    const parsedDogs = dogs
      .split(',')
      .map((dog) => dog.trim())
      .filter(Boolean);

    if (!normalizedTitle || !date || !startTime || !endTime || !locationId) {
      toast({
        variant: 'destructive',
        title: 'Brak wymaganych danych',
        description: 'Uzupełnij nazwę, datę, godziny i lokalizację.',
      });
      return;
    }

    if (!isExternalRent && !trainerId) {
      toast({
        variant: 'destructive',
        title: 'Brak trenerki',
        description: 'Wybierz trenerkę albo zaznacz wynajem zewnętrzny.',
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      title: normalizedTitle,
      date,
      start_time: startTime,
      end_time: endTime,
      trainer_id: isExternalRent ? null : trainerId,
      location_id: locationId,
      is_external_rent: isExternalRent,
      dogs_list: parsedDogs,
    };

    const { error } = eventToEdit
      ? await supabase.from('events').update(payload).eq('id', eventToEdit.id)
      : await supabase.from('events').insert([payload]);

    if (error) {
      setIsSubmitting(false);
      toast({
        variant: 'destructive',
        title: isEditMode ? 'Nie udało się zapisać zmian' : 'Nie udało się zapisać zajęć',
        description: error.message,
      });
      return;
    }

    toast({
      title: isEditMode ? 'Zmiany zapisane' : 'Zajęcia zapisane',
      description: isEditMode
        ? 'Wydarzenie zostało zaktualizowane.'
        : 'Nowe wydarzenie zostało dodane do grafiku.',
    });

    onEventChanged();
    setIsSubmitting(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditMode ? 'Edytuj zajęcia' : 'Dodaj zajęcia'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="ev-title">Nazwa zajęć</Label>
            <Input
              id="ev-title"
              placeholder="np. Nosework – poziom 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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

          {/* External rent */}
          <div className="flex items-start gap-3 rounded-md border p-3">
            <Checkbox
              id="ev-external-rent"
              checked={isExternalRent}
              onCheckedChange={(checked) => setIsExternalRent(checked === true)}
              disabled={isSubmitting}
            />
            <div className="space-y-1">
              <Label htmlFor="ev-external-rent" className="cursor-pointer">
                Wynajem zewnętrzny
              </Label>
              <p className="text-xs text-muted-foreground">
                Zaznacz, jeśli wydarzenie nie ma przypisanej trenerki Szczek Szczek.
              </p>
            </div>
          </div>

          <Separator />

          {/* Trainer */}
          <div className="space-y-1.5">
            <Label>Trenerka</Label>
            <Select value={trainerId} onValueChange={setTrainerId} disabled={isSubmitting || isExternalRent}>
              <SelectTrigger>
                <SelectValue placeholder={isExternalRent ? 'Brak trenerki dla wynajmu' : 'Wybierz trenerkę'} />
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
            <Select value={locationId} onValueChange={setLocationId} disabled={isSubmitting}>
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
              disabled={isSubmitting}
            />
          </div>

          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Anuluj
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isEditMode ? 'Zapisz zmiany' : 'Dodaj zajęcia'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
