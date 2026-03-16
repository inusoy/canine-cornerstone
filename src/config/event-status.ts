import type { EventStatus } from '@/types/schedule';

export interface EventStatusConfig {
  label: string;
  blockClass: string;
  badgeClass: string;
  monthPillClass: string;
  dotClass: string;
}

export const EVENT_STATUS_CONFIG: Record<EventStatus, EventStatusConfig> = {
  available: {
    label: 'Dostępny termin',
    blockClass: 'bg-green-100 text-green-900 border-green-300',
    badgeClass: 'bg-green-200 text-green-900 border-green-300',
    monthPillClass: 'bg-green-100 text-green-900',
    dotClass: 'bg-green-500',
  },
  booked: {
    label: 'Zajęty termin',
    blockClass: 'bg-red-100 text-red-900 border-red-300',
    badgeClass: 'bg-red-200 text-red-900 border-red-300',
    monthPillClass: 'bg-red-100 text-red-900',
    dotClass: 'bg-red-500',
  },
  paid: {
    label: 'Opłacone',
    blockClass: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    badgeClass: 'bg-yellow-200 text-yellow-900 border-yellow-300',
    monthPillClass: 'bg-yellow-100 text-yellow-900',
    dotClass: 'bg-yellow-500',
  },
  cancelled: {
    label: 'Brak zajęć',
    blockClass: 'bg-gray-100 text-gray-500 border-gray-300',
    badgeClass: 'bg-gray-200 text-gray-700 border-gray-300',
    monthPillClass: 'bg-gray-100 text-gray-500 line-through',
    dotClass: 'bg-gray-400',
  },
  group_open: {
    label: 'Grupowe (można się zapisać)',
    blockClass: 'bg-blue-100 text-blue-900 border-blue-300',
    badgeClass: 'bg-blue-200 text-blue-900 border-blue-300',
    monthPillClass: 'bg-blue-100 text-blue-900',
    dotClass: 'bg-blue-500',
  },
  special_event: {
    label: 'Wydarzenie',
    blockClass: 'bg-purple-100 text-purple-900 border-purple-300',
    badgeClass: 'bg-purple-200 text-purple-900 border-purple-300',
    monthPillClass: 'bg-purple-100 text-purple-900',
    dotClass: 'bg-purple-500',
  },
};

export const EVENT_STATUS_OPTIONS: Array<{ value: EventStatus; label: string }> = [
  { value: 'available', label: EVENT_STATUS_CONFIG.available.label },
  { value: 'booked', label: EVENT_STATUS_CONFIG.booked.label },
  { value: 'paid', label: EVENT_STATUS_CONFIG.paid.label },
  { value: 'cancelled', label: EVENT_STATUS_CONFIG.cancelled.label },
  { value: 'group_open', label: EVENT_STATUS_CONFIG.group_open.label },
  { value: 'special_event', label: EVENT_STATUS_CONFIG.special_event.label },
];

export const TRAINER_LEFT_BORDER_CLASS = {
  rose: 'border-l-4 border-l-rose-500',
  emerald: 'border-l-4 border-l-emerald-500',
  violet: 'border-l-4 border-l-violet-500',
} as const;
