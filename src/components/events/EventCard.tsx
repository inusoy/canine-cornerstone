import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, CalendarPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from '@/lib/date-utils';
import { Event } from '@/types/event';
import OptimizedImage from "@/components/ui/optimized-image";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [embedFailed, setEmbedFailed] = useState(false);
  const isPastEvent = new Date(event.date) < new Date();
  
  // Extract post ID from Instagram URL
  const getPostId = (url: string) => {
    const regex = /\/p\/([^/]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };
  
  // Trigger Instagram embed script after component mount or update
  useEffect(() => {
    setIsLoading(true);
    
    // Set a timeout to check if Instagram embed loaded properly
    const embedTimeout = setTimeout(() => {
      // If still loading after 5 seconds, assume embed failed
      if (isLoading) {
        setEmbedFailed(true);
        setIsLoading(false);
      }
    }, 5000);
    
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      // Add a small delay to allow processing to complete
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Check if embed was successful
        const embedContainer = document.querySelector('.instagram-embed-container iframe');
        if (!embedContainer) {
          setEmbedFailed(true);
        }
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(embedTimeout);
      };
    }
    
    return () => clearTimeout(embedTimeout);
  }, [event.instagramUrl, isLoading]);

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
          <div className="relative">
            {/* Instagram embed with loading state and fallback */}
            <div className="instagram-embed-container min-h-[300px]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {embedFailed && (
                <div className="flex items-center justify-center h-[300px] bg-muted">
                  <div className="text-center p-4">
                    <OptimizedImage
                      src="/placeholder.svg"
                      alt={event.title}
                      className="w-full max-h-[200px] object-contain mb-2"
                      width={300}
                      height={200}
                    />
                    <a 
                      href={event.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Zobacz post na Instagramie <ExternalLink className="h-4 w-4 inline" />
                    </a>
                  </div>
                </div>
              )}
              
              {!embedFailed && (
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
              )}
            </div>

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
