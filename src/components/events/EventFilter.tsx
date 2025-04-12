
import React from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface EventFilterProps {
  showPastEvents: boolean;
  onToggleShowPastEvents: () => void;
  sortOrder: 'asc' | 'desc';
  onChangeSortOrder: () => void;
}

const EventFilter: React.FC<EventFilterProps> = ({
  showPastEvents,
  onToggleShowPastEvents,
  sortOrder,
  onChangeSortOrder
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start sm:items-center">
      <div 
        className="flex items-center cursor-pointer" 
        onClick={onToggleShowPastEvents}
      >
        {showPastEvents ? (
          <CheckSquare className="h-5 w-5 text-primary mr-2" />
        ) : (
          <Square className="h-5 w-5 text-primary mr-2" />
        )}
        <span>Pokaż minione wydarzenia</span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onChangeSortOrder}
        className="ml-auto"
      >
        Sortuj: {sortOrder === 'asc' ? 'od najstarszych' : 'od najnowszych'}
      </Button>
    </div>
  );
};

export default EventFilter;
