import type { Trainer, Location, ScheduleEvent } from '@/types/schedule';

export const TRAINERS: Trainer[] = [
  { id: 't1', name: 'Anna Kowalska',      initials: 'AK', colorCode: 'rose' },
  { id: 't2', name: 'Marta Nowak',        initials: 'MN', colorCode: 'emerald' },
  { id: 't3', name: 'Kasia Wiśniewska',   initials: 'KW', colorCode: 'violet' },
];

export const LOCATIONS: Location[] = [
  { id: 'l1', name: 'Lokal główny',     type: 'main' },
  { id: 'l2', name: 'Plac treningowy',  type: 'outdoor_rental' },
  { id: 'l3', name: 'Teren',            type: 'field' },
];

/** Returns a local-timezone YYYY-MM-DD string for today + N days */
function dateOf(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export const MOCK_EVENTS: ScheduleEvent[] = [
  // Dzień 0 – dziś
  { id: 'e1',  title: 'Psie przedszkole',                date: dateOf(0), startTime: '09:00', endTime: '10:30', trainerId: 't1', locationId: 'l1', isExternalRent: false, dogsList: ['Burek', 'Luna', 'Max', 'Bella'] },
  { id: 'e2',  title: 'Konsultacje behawioralne',        date: dateOf(0), startTime: '11:00', endTime: '12:00', trainerId: 't2', locationId: 'l1', isExternalRent: false, dogsList: ['Rocky'] },
  { id: 'e3',  title: 'Nosework – poziom 1',             date: dateOf(0), startTime: '16:00', endTime: '17:30', trainerId: 't3', locationId: 'l3', isExternalRent: false, dogsList: ['Zefir', 'Tosia', 'Huxley'] },

  // Dzień 1
  { id: 'e4',  title: 'Wynajem sali',                    date: dateOf(1), startTime: '10:00', endTime: '12:00', trainerId: '',   locationId: 'l1', isExternalRent: true,  dogsList: [] },
  { id: 'e5',  title: 'Psia Akademia',                   date: dateOf(1), startTime: '17:00', endTime: '18:30', trainerId: 't1', locationId: 'l2', isExternalRent: false, dogsList: ['Atlas', 'Frida', 'Nero', 'Cleo', 'Bruno'] },

  // Dzień 2
  { id: 'e6',  title: 'Nosework – poziom 2',             date: dateOf(2), startTime: '09:00', endTime: '10:30', trainerId: 't3', locationId: 'l3', isExternalRent: false, dogsList: ['Zefir', 'Huxley', 'Ruda'] },
  { id: 'e7',  title: 'Lęk Out',                         date: dateOf(2), startTime: '15:00', endTime: '16:30', trainerId: 't2', locationId: 'l1', isExternalRent: false, dogsList: ['Bolero', 'Maja'] },

  // Dzień 3
  { id: 'e8',  title: 'Warsztat: Łap Chód',              date: dateOf(3), startTime: '10:00', endTime: '12:30', trainerId: 't1', locationId: 'l2', isExternalRent: false, dogsList: ['Luna', 'Max', 'Atlas', 'Bella', 'Bruno', 'Cleo'] },
  { id: 'e9',  title: 'Psie przedszkole',                date: dateOf(3), startTime: '17:00', endTime: '18:00', trainerId: 't2', locationId: 'l1', isExternalRent: false, dogsList: ['Rocky', 'Burek'] },

  // Dzień 4
  { id: 'e10', title: 'Spacer noseworkowy',              date: dateOf(4), startTime: '09:00', endTime: '10:00', trainerId: 't3', locationId: 'l3', isExternalRent: false, dogsList: ['Tosia', 'Ruda', 'Frida'] },
  { id: 'e11', title: 'Psie przedszkole',                date: dateOf(4), startTime: '11:00', endTime: '12:30', trainerId: 't1', locationId: 'l1', isExternalRent: false, dogsList: ['Nero', 'Luna', 'Burek'] },
  { id: 'e12', title: 'Wynajem sali',                    date: dateOf(4), startTime: '16:00', endTime: '17:00', trainerId: '',   locationId: 'l1', isExternalRent: true,  dogsList: [] },

  // Dzień 5
  { id: 'e13', title: 'Warsztaty weekendowe – Praca węchem', date: dateOf(5), startTime: '10:00', endTime: '13:00', trainerId: 't2', locationId: 'l2', isExternalRent: false, dogsList: ['Zefir', 'Huxley', 'Bolero', 'Maja', 'Atlas', 'Frida', 'Ruda'] },

  // Dzień 6
  { id: 'e14', title: 'Psia Akademia',                   date: dateOf(6), startTime: '10:00', endTime: '12:00', trainerId: 't1', locationId: 'l2', isExternalRent: false, dogsList: ['Atlas', 'Cleo', 'Bruno', 'Bella'] },
  { id: 'e15', title: 'Nosework – poziom 1',             date: dateOf(6), startTime: '13:00', endTime: '14:30', trainerId: 't3', locationId: 'l3', isExternalRent: false, dogsList: ['Zefir', 'Tosia', 'Huxley', 'Luna'] },
];
