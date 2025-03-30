
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

interface ServiceCardProps {
  product: Product;
}

export const ServiceCard = ({ product }: ServiceCardProps) => {
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
    <Link to={product.link} className="block group">
      <Card 
        className="p-6 hover-lift fade-in bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex flex-col items-center justify-center text-center h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {iconExists && (
          <div className="mb-4 w-40 h-40 flex items-center justify-center">
            <img 
              src={isHovered ? `/icons/dog-${product.id}-hover.svg` : `/icons/dog-${product.id}.svg`} 
              alt="" 
              className="w-full h-full transition-all duration-300"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold uppercase font-josefin">{product.title}</h3>
      </Card>
    </Link>
  );
};
