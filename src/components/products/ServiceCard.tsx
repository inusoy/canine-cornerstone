import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import OptimizedImage from "@/components/ui/optimized-image";

interface ServiceCardProps {
  product: Product;
  fullWidth?: boolean;
}

export const ServiceCard = ({ product, fullWidth = false }: ServiceCardProps) => {
  const [iconExists, setIconExists] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if the icon file exists
    const checkIconExists = async () => {
      try {
        const response = await fetch(`/icons/dog-${product.id}.svg`);
        setIconExists(response.ok);
      } catch (error) {
        setIconExists(false);
      }
    };

    checkIconExists();
  }, [product.id]);

  return (
    <Link to={product.link} className={cn("block group", fullWidth && "w-full")}>
      <Card 
        className={cn(
          "p-6 hover-lift fade-in bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 h-full",
          fullWidth 
            ? "flex flex-row items-center justify-center text-center gap-6 px-8" 
            : "flex flex-col items-center justify-center text-center"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {iconExists && (
          <div className={cn(
            "flex items-center justify-center", 
            fullWidth ? "w-24 h-24 flex-shrink-0" : "mb-4 w-40 h-40"
          )}>
            <OptimizedImage 
              src={isHovered ? `/icons/dog-${product.id}-hover.svg` : `/icons/dog-${product.id}.svg`} 
              alt={`Ikona ${product.title}`}
              className="w-full h-full transition-all duration-300"
              width={fullWidth ? 96 : 160}
              height={fullWidth ? 96 : 160}
            />
          </div>
        )}
        <h3 className={cn("text-xl font-semibold uppercase font-josefin", isHovered && "text-card")}>
          {product.title}
        </h3>
      </Card>
    </Link>
  );
};
