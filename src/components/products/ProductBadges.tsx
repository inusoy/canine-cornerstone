
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

interface ProductBadgesProps {
  product: Product;
}

export const ProductBadges = ({ product }: ProductBadgesProps) => {
  const isDiscountValid = product.discount && new Date(product.discount.validUntil) > new Date();

  return (
    <div className="flex flex-wrap gap-2">
      {product.isNew && (
        <Badge variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
          New
        </Badge>
      )}
      {isDiscountValid && (
        <Badge variant="destructive" className="hover:bg-red-600">
          {product.discount.percentage}% OFF
        </Badge>
      )}
      {product.type === "bundle" && (
        <Badge variant="secondary" className="bg-purple-500 text-white hover:bg-purple-600">
          Bundle
        </Badge>
      )}
    </div>
  );
};
