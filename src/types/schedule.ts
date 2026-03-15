export interface Trainer {
  id: string;
  name: string;
  initials: string;
  /** Color key used to look up visual style. One of: 'rose' | 'emerald' | 'violet' */
  colorCode: 'rose' | 'emerald' | 'violet';
}

export type LocationType = 'main' | 'outdoor_rental' | 'field';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  /** ISO date string: YYYY-MM-DD */
  date: string;
  /** 24h time string: HH:mm */
  startTime: string;
  /** 24h time string: HH:mm */
  endTime: string;
  /** Empty string when isExternalRent is true and no trainer is assigned */
  trainerId: string;
  locationId: string;
  isExternalRent: boolean;
  dogsList: string[];
}
