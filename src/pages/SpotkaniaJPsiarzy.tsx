
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

const SpotkaniaJPsiarzy: React.FC = () => {
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
    // Filter events based on date
    let filtered = events;

    if (!showPastEvents) {
      filtered = events.filter(event => new Date(event.date) >= now);
    }

    // Sort events by date
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
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

  const hasUpcomingEvents = events.some(event => new Date(event.date) >= new Date());
  const isMobile = useIsMobile();

  return (
    <>
      <Helmet>
        <title>Spotkania Psiarzy | Szczek Szczek Wrocław</title>
        <meta name="description" content="Zobacz nadchodzące spotkania dla miłośników psów we Wrocławiu organizowane przez Szczek Szczek." />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-12">
        <h1
          className={`text-5xl font-bryndan mb-6 text-primary ${isMobile ? "text-center" : "text-left"
            } uppercase`}
        >SPOTKANIA PSIARZY</h1>

        <p className="mb-8 text-lg">

          NA SPOTKANIACH PSIARZY BĘDZIEMY PODEJMOWAĆ SIĘ NAJRÓŻNIEJSZYCH AKTYWNOŚCI, OD ROZMÓW, PRZEZ PLANSZÓWKI, PICIE HERBATY, RZECZY KREATYWNE I ROZWIJAJĄCE. BĘDZIE TO BEZPIECZNA, SPOKOJNA I PRZYJEMNA PRZESTRZEŃ, W KTÓREJ BĘDZIE MOŻNA POZNAĆ CIEKAWYCH LUDZI, A MOŻE NAWET ZNALEŹĆ NOWE, NIEPSIE HOBBY… nawet jeśli coś wydaje się „NIE TWOJE”, TO WARTO WYCHODZIĆ ZE STREFY KOMFORTU I POZNAWAĆ NOWE AKTYWNOŚCI!

        </p>

        <EventFilter
          showPastEvents={showPastEvents}
          onToggleShowPastEvents={toggleShowPastEvents}
          sortOrder={sortOrder}
          onChangeSortOrder={toggleSortOrder}
        />

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default SpotkaniaJPsiarzy;
