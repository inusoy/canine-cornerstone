
import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, CalendarPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatDate } from '@/lib/date-utils';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPastEvent = new Date(event.date) < new Date();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const addToGoogleCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent("Wrocław");
    const dates = encodeURIComponent(
      new Date(event.date).toISOString().replace(/-|:|\.\d+/g, '')
    );
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}/${dates}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 mb-6 ${isPastEvent ? 'opacity-70' : ''}`}>
      <div className="relative" onClick={toggleExpand}>
        <div className="cursor-pointer">
          <div className="aspect-video overflow-hidden bg-gray-200 relative">
            <iframe
              src={`${event.instagramUrl.replace('/p/', '/embed/p/')}`}
              className="w-full h-full border-none"
              allowFullScreen
            />
            {isPastEvent && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg uppercase">Wydarzenie minione</span>
              </div>
            )}
          </div>
          <div className="p-4 bg-card text-card-foreground">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold">{formatDate(event.date)}</span>
              </div>
              <span className="font-bold text-primary">{event.price}</span>
            </div>
            <h3 className="text-xl font-bold mt-2">{event.title}</h3>
            <div className="flex items-center text-sm mt-4 justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(event.formUrl, '_blank');
                }}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Zapisz się
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs" 
                onClick={addToGoogleCalendar}
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

export default EventCard;
