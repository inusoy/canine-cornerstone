import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventCard from '@/components/events/EventCard';
import EventFilter from '@/components/events/EventFilter';
import EmptyEvents from '@/components/events/EmptyEvents';
import { Event } from '@/types/event';
import wydarzenia from '@/data/wydarzenia.json';
import { useIsMobile } from "@/hooks/use-mobile";

const SpotkaniaPsiarzy: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    // Load events from the data file
    setEvents(wydarzenia as Event[]);
  }, []);

  useEffect(() => {
    const now = new Date();
    let filtered = events;

    if (!showPastEvents) {
      filtered = events.filter(event => {
        // Wydarzenie jest nadchodzące jeśli kończy się dziś lub później
        const end = event.dateEnd
          ? new Date(event.dateEnd + 'T23:59:59')
          : new Date(event.dateStart + (event.timeEnd ? 'T' + event.timeEnd : 'T23:59:59'));
        return end >= now;
      });
    }

    filtered = [...filtered].sort((a, b) => {
      // Sortuj po dacie rozpoczęcia
      const dateA = new Date(a.dateStart).getTime();
      const dateB = new Date(b.dateStart).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredEvents(filtered);
  }, [events, showPastEvents, sortOrder]);

  const toggleShowPastEvents = () => {
    setShowPastEvents(!showPastEvents);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const hasUpcomingEvents = events.some(event => new Date(event.dateEnd || event.dateStart) >= new Date());
  const isMobile = useIsMobile();

  // Prepare structured data for events (Schema.org)
  const getEventStructuredData = () => {
    // Filter only upcoming events for structured data
    const upcomingEvents = events.filter(event => new Date(event.dateEnd || event.dateStart) >= new Date());
    
    // Create EventSeries schema
    const eventSeriesSchema = {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "Wydarzenia Szczek Szczek",
      "description": "Regularne spotkania dla miłośników psów we Wrocławiu organizowane przez Szczek Szczek",
      "url": "https://www.szczekszczek.pl/spotkania-psiarzy",
      "organizer": {
        "@type": "Organization",
        "name": "Szczek Szczek",
        "url": "https://www.szczekszczek.pl"
      },
      "location": {
        "@type": "Place",
        "name": "Szczek Szczek",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wrocław",
          "postalCode": "54-611",
          "streetAddress": "Gwarecka, 8/3L",
          "addressCountry": "PL"
        }
      },
      "subEvent": upcomingEvents.map(event => ({
        "@type": "Event",
        "name": event.title,
        "description": event.description,
        "startDate": new Date(event.dateStart).toISOString(),
        "endDate": (() => {
          // Add 2 hours to start date for end date if not specified
          const endDate = new Date(event.dateStart);
          endDate.setHours(endDate.getHours() + 2);
          return endDate.toISOString();
        })(),
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Szczek Szczek",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wrocław",
            "postalCode": "54-611",
            "streetAddress": "Gwarecka, 8/3L",
            "addressCountry": "PL"
          }
        },
        "image": event.instagramUrl ? [event.instagramUrl.replace(/\/$/, "") + "/media/?size=l"] : [],
        "offers": {
          "@type": "Offer",
          "price": event.price?.replace(/[^\d]/g, '') || "0",
          "priceCurrency": "PLN",
          "availability": "https://schema.org/InStock",
          "url": event.formUrl || "https://www.szczekszczek.pl/spotkania-psiarzy",
          "validFrom": new Date().toISOString()
        },
        "organizer": {
          "@type": "Organization",
          "name": "Szczek Szczek",
          "url": "https://www.szczekszczek.pl"
        }
      }))
    };
    
    return JSON.stringify(eventSeriesSchema);
  };

  return (
    <>
      <Helmet>
        <title>Wydarzenia | Szczek Szczek Wrocław</title>
        <meta 
          name="description" 
          content="Zobacz nadchodzące spotkania dla miłośników psów we Wrocławiu organizowane przez Szczek Szczek. Bezpieczna przestrzeń do poznania ciekawych ludzi i nowych aktywności." 
        />
        <link rel="canonical" href="/spotkania-psiarzy" />
        <meta property="og:title" content="Wydarzenia | Szczek Szczek Wrocław" />
        <meta 
          property="og:description" 
          content="Spotkania dla miłośników psów we Wrocławiu. Przyjazna atmosfera, ciekawe aktywności i możliwość poznania nowych ludzi z podobnymi zainteresowaniami." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/spotkania-psiarzy" />
        
        {/* Schema.org structured data for events */}
        {events.length > 0 && (
          <script type="application/ld+json">
            {getEventStructuredData()}
          </script>
        )}
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-12">
        <h1
          className={`text-5xl font-bryndan mb-6 text-primary ${isMobile ? "text-center" : "text-left"
            } uppercase`}
        >WYDARZENIA</h1>

        <p className="mb-8 text-lg">
          Na spotkaniach psiarzy będziemy podejmować się najróżniejszych aktywności, od rozmów, przez planszówki, picie herbaty, rzeczy kreatywne i rozwijające. Będzie to bezpieczna, spokojna i przyjemna przestrzeń, w której będzie można poznać ciekawych ludzi, a może nawet znaleźć nowe, niepsie hobby… Nawet jeśli coś wydaje się „nie Twoje", to warto wychodzić ze strefy komfortu i poznawać nowe aktywności!
        </p>

        <EventFilter
          showPastEvents={showPastEvents}
          onToggleShowPastEvents={toggleShowPastEvents}
          sortOrder={sortOrder}
          onChangeSortOrder={toggleSortOrder}
        />

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          (!showPastEvents && !hasUpcomingEvents) && <EmptyEvents />
        )}
      </main>

      <Footer />
    </>
  );
};

export default SpotkaniaPsiarzy;