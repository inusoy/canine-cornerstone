import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Trainer, Location, ScheduleEvent, LocationType } from '@/types/schedule';

// ─── Raw Supabase row shapes (snake_case) ─────────────────────────────────────

interface TrainerRow {
  id: string;
  name: string;
  initials: string;
  color_code: 'rose' | 'emerald' | 'violet';
}

interface LocationRow {
  id: string;
  name: string;
  type: LocationType;
}

interface EventRow {
  id: string;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  trainer_id: string | null;
  location_id: string;
  is_external_rent: boolean;
  dogs_list: string[] | null;
}

// ─── Mappers ──────────────────────────────────────────────────────────────────

function mapTrainer(row: TrainerRow): Trainer {
  return {
    id:        row.id,
    name:      row.name,
    initials:  row.initials,
    colorCode: row.color_code,
  };
}

function mapLocation(row: LocationRow): Location {
  return {
    id:   row.id,
    name: row.name,
    type: row.type,
  };
}

function mapEvent(row: EventRow): ScheduleEvent {
  return {
    id:             row.id,
    title:          row.title,
    date:           row.date,
    startTime:      row.start_time,
    endTime:        row.end_time,
    trainerId:      row.trainer_id ?? '',
    locationId:     row.location_id,
    isExternalRent: row.is_external_rent,
    dogsList:       row.dogs_list ?? [],
  };
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface ScheduleData {
  trainers:  Trainer[];
  locations: Location[];
  events:    ScheduleEvent[];
  loading:   boolean;
  error:     string | null;
  refetch:   () => void;
}

export function useSupabaseSchedule(): ScheduleData {
  const [trainers,  setTrainers]  = useState<Trainer[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [events,    setEvents]    = useState<ScheduleEvent[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState<string | null>(null);
  const [tick,      setTick]      = useState(0);

  function refetch() {
    setTick((n) => n + 1);
  }

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    async function fetchAll() {
      const [trainersRes, locationsRes, eventsRes] = await Promise.all([
        supabase.from('trainers').select('*'),
        supabase.from('locations').select('*'),
        supabase.from('events').select('*'),
      ]);

      if (cancelled) return;

      if (trainersRes.error || locationsRes.error || eventsRes.error) {
        const msg =
          trainersRes.error?.message ??
          locationsRes.error?.message ??
          eventsRes.error?.message ??
          'Nieznany błąd';
        setError(msg);
        setLoading(false);
        return;
      }

      setTrainers((trainersRes.data  as TrainerRow[]).map(mapTrainer));
      setLocations((locationsRes.data as LocationRow[]).map(mapLocation));
      setEvents((eventsRes.data     as EventRow[]).map(mapEvent));
      setLoading(false);
    }

    fetchAll();
    return () => { cancelled = true; };
  }, [tick]);

  return { trainers, locations, events, loading, error, refetch };
}
