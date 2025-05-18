import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, CalendarPlus, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatEventDateRange } from '@/lib/date-utils';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
}

function getGoogleCalendarDateTime(date: string, time?: string): string {
  if (!date) return '';
  const t = time ? time : '00:00';
  return date.replace(/-/g, '') + 'T' + t.replace(':', '') + '00';
}

function getGoogleCalendarDates(event: Event): string {
  const startDate = event.dateStart;
  const startTime = event.timeStart;
  const endDate = event.dateEnd || event.dateStart;
  let endTime = event.timeEnd;

  if (!endTime && startTime) endTime = '23:59';

  const start = getGoogleCalendarDateTime(startDate!, startTime);
  const end = getGoogleCalendarDateTime(endDate!, endTime);
  return `${start}/${end}`;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const now = new Date();
  let isPastEvent = false;
  if (event.dateEnd) {
    const end = new Date(event.dateEnd + 'T23:59:59');
    isPastEvent = end < now;
  } else if (event.dateStart) {
    const end = new Date(event.dateStart + (event.timeEnd ? 'T' + event.timeEnd : 'T23:59:59'));
    isPastEvent = end < now;
  }

  useEffect(() => {
    setIsLoading(true);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [event.instagramUrl]);

  const shortDescription = event.description.length > 150
    ? event.description.slice(0, 150).trim() + '...'
    : event.description;

  const earlyBirdMatch = event.price?.toLowerCase().includes('early bird');
  const earlyBirdInfo = earlyBirdMatch ? event.price : null;
  const mainPrice = earlyBirdMatch ? event.price.replace(/early bird.*$/i, '').trim() : event.price;

  // Early bird logic
  let showEarlyBird = false;
  let displayPrice = mainPrice;
  let earlyBirdDate: Date | null = null;
  if (event.earlyBirdPrice && event.earlyBirdUntil) {
    earlyBirdDate = new Date(event.earlyBirdUntil + 'T23:59:59');
    if (earlyBirdDate >= new Date()) {
      showEarlyBird = true;
      displayPrice = event.earlyBirdPrice;
    }
  }

  const hasForm = event.formUrl && event.formUrl.trim() !== '';
  const hasInstagram = event.instagramUrl && event.instagramUrl.trim() !== '';
  const ctaText = hasForm ? 'Zapisz się' : hasInstagram ? 'Zobacz na Instagramie' : '';
  const ctaIcon = hasForm ? <Send className="h-4 w-4 mr-1" /> : <ExternalLink className="h-4 w-4 mr-1" />;
  const ctaUrl = hasForm ? event.formUrl : event.instagramUrl;

  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ctaUrl) window.open(ctaUrl, '_blank');
  };

  const addToGoogleCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent("Wrocław");
    const dates = getGoogleCalendarDates(event);
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 mb-6 shadow-md ${isPastEvent ? 'opacity-70' : ''}`}>
      <div className="relative">
        <div className="instagram-embed-container w-full aspect-[4/3] bg-muted relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={event.instagramUrl}
            data-instgrm-version="14"
            data-instgrm-captioned="false"
            data-instgrm-hidecaption="true"
          >
            <a href={event.instagramUrl} target="_blank" rel="noopener noreferrer">
              Zobacz post na Instagramie
            </a>
          </blockquote>
        </div>
        {isPastEvent && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-bold text-lg uppercase">Wydarzenie minione</span>
          </div>
        )}
        <div className="p-4 bg-card text-card-foreground">
          <div className="flex items-center gap-2 text-primary text-base font-semibold mb-1">
            <Calendar className="h-5 w-5" />
            <span>{formatEventDateRange(event)}</span>
            {event.timeStart && !formatEventDateRange(event).includes('od ' + event.timeStart) && !formatEventDateRange(event).includes(event.timeStart + '–') && (
              <span>o {event.timeStart}{event.timeEnd && ` - ${event.timeEnd}`}</span>
            )}
          </div>
          <h3 className="text-xl font-bold mt-3 mb-2">{event.title}</h3>
          {!isPastEvent && displayPrice && (
            <div className="text-lg font-bold text-primary mb-1">
              {displayPrice}
              {showEarlyBird && earlyBirdDate && (
                <>
                  <span className="block text-xs text-amber-600 mt-1">Early bird do {earlyBirdDate.toLocaleDateString('pl-PL')}</span>
                  {event.price && (
                    <span className="block text-xs text-muted-foreground mt-1">Po {earlyBirdDate.toLocaleDateString('pl-PL')}: {event.price}</span>
                  )}
                </>
              )}
              {!showEarlyBird && earlyBirdInfo && (
                <span className="block text-xs text-muted-foreground mt-1">{earlyBirdInfo}</span>
              )}
            </div>
          )}
          <div className="mb-2">
            <span className="text-sm text-muted-foreground">
              {isExpanded ? event.description : shortDescription}
            </span>
            {event.description.length > 150 && (
              <Button
                variant="link"
                size="sm"
                className="ml-1 px-1 py-0 text-xs align-baseline"
                onClick={() => setIsExpanded((v) => !v)}
              >
                {isExpanded ? 'Zwiń' : 'Czytaj więcej'}
              </Button>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-4">
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto"
              onClick={handleCtaClick}
              disabled={isPastEvent || !ctaUrl}
              style={isPastEvent ? { pointerEvents: 'none', opacity: 0.5 } : {}}
            >
              {ctaIcon}
              {ctaText}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
              onClick={addToGoogleCalendar}
              disabled={isPastEvent}
              style={isPastEvent ? { pointerEvents: 'none', opacity: 0.5 } : {}}
            >
              <CalendarPlus className="h-4 w-4 mr-1" />
              Dodaj do kalendarza
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default EventCard;
