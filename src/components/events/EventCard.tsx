import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, CalendarPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, formatEventDateRange } from '@/lib/date-utils';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
}

function getGoogleCalendarDateTime(date: string, time?: string): string {
  if (!date) return '';
  // Jeśli nie podano godziny, ustaw na 00:00
  const t = time ? time : '00:00';
  // Składnia: YYYYMMDDTHHmmssZ (UTC) lub YYYYMMDDTHHmmss (local)
  // Zakładamy czas lokalny, bez Z
  return date.replace(/-/g, '') + 'T' + t.replace(':', '') + '00';
}

function getGoogleCalendarDates(event: Event): string {
  // Start
  const startDate = event.dateStart;
  const startTime = event.timeStart;
  const endDate = event.dateEnd || event.dateStart;
  let endTime = event.timeEnd;
  
  // Jeśli nie ma żadnej godziny końca, ustaw 23:59
  if (!endTime && startTime) endTime = '23:59';

  const start = getGoogleCalendarDateTime(startDate!, startTime);
  const end = getGoogleCalendarDateTime(endDate!, endTime);
  return `${start}/${end}`;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Poprawne obliczanie czy wydarzenie jest przeszłe
  const now = new Date();
  let isPastEvent = false;
  if (event.dateEnd) {
    // Jeśli wydarzenie kończy się przed dzisiaj 00:00, jest przeszłe
    const end = new Date(event.dateEnd + 'T23:59:59');
    isPastEvent = end < now;
  } else if (event.dateStart) {
    // Jeśli wydarzenie jednodniowe i kończy się przed dzisiaj 00:00, jest przeszłe
    const end = new Date(event.dateStart + (event.timeEnd ? 'T' + event.timeEnd : 'T23:59:59'));
    isPastEvent = end < now;
  }

  // Trigger Instagram embed script after component mount or update
  useEffect(() => {
    setIsLoading(true);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      // Add a small delay to allow processing to complete
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [event.instagramUrl]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
    <Card className={`overflow-hidden transition-all duration-300 mb-6 ${isPastEvent ? 'opacity-70' : ''}`}>
      <div className="relative" onClick={toggleExpand}>
        <div className="cursor-pointer">
          <div className="relative">
            {/* Instagram embed with loading state */}
            <div className="instagram-embed-container">
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
          </div>
          
          <div className="p-4 bg-card text-card-foreground">
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center gap-2 bg-muted text-primary rounded-md px-3 py-1 text-lg font-semibold">
                <Calendar className="h-5 w-5" />
                {formatEventDateRange(event)}
              </div>
              {!isPastEvent && (
                <span className="font-bold text-primary">{event.price}</span>
              )}
            </div>
            <h3 className="text-xl font-bold mt-2">{event.title}</h3>
            <div className="flex items-center text-sm mt-4 justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  const url = event.formUrl && event.formUrl.trim() !== '' ? event.formUrl : event.instagramUrl;
                  if (url) window.open(url, '_blank');
                }}
                disabled={isPastEvent}
                style={isPastEvent ? { pointerEvents: 'none', opacity: 0.5 } : {}}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Zapisz się
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs" 
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
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-2 right-2 rounded-full bg-background/80 p-1 h-8 w-8"
          onClick={toggleExpand}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      {isExpanded && (
        <CardContent className="p-4 border-t">
          <p className="text-sm">{event.description}</p>
        </CardContent>
      )}
    </Card>
  );
};

// Add TypeScript declaration for instgrm global
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
