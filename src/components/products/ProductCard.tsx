
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { ProductBadges } from "./ProductBadges";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="p-6 hover-lift fade-in bg-background/50 backdrop-blur-sm">
      <div className="mb-4">
        <ProductBadges product={product} />
      </div>
      <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
      <p className="text-muted-foreground mb-4">{product.description}</p>
      <p className="font-semibold text-primary">{product.price}</p>
      <Button variant="outline" className="mt-4 w-full" asChild>
        <Link to={product.link}>Learn More</Link>
      </Button>
    </Card>
  );
};
