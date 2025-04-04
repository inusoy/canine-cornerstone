import React from 'react';
import { cn } from "@/lib/utils";

interface PriceTagProps {
  children: React.ReactNode;
  className?: string;
}

const PriceTag = ({ children, className = "" }: PriceTagProps) => {
  return (
    <p className={cn("text-xl font-semibold text-primary mt-2", className)}>
      {children}
    </p>
  );
};

export default PriceTag;