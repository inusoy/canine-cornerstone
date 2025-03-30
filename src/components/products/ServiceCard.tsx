
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

interface ServiceCardProps {
  product: Product;
}

export const ServiceCard = ({ product }: ServiceCardProps) => {
  const [iconExists, setIconExists] = useState(true);

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
    <Card className="p-6 hover-lift fade-in bg-background/50 backdrop-blur-sm flex flex-col items-center justify-center text-center">
      <Link to={product.link} className="group flex flex-col items-center">
        {iconExists && (
          <div className="mb-4 w-16 h-16 flex items-center justify-center">
            <img 
              src={`/icons/dog-${product.id}.svg`} 
              alt="" 
              className="w-full h-full text-secondary group-hover:text-primary transition-colors duration-300"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-primary uppercase font-bryndan">{product.title}</h3>
      </Link>
    </Card>
  );
};
