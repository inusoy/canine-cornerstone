
import React from 'react';
import { Calendar } from 'lucide-react';

const EmptyEvents: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-card text-card-foreground rounded-lg">
      <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">Aktualnie brak nadchodzących wydarzeń</h3>
      <p className="text-muted-foreground text-center">Zaglądaj tu regularnie!</p>
    </div>
  );
};

export default EmptyEvents;
