
import { Link } from "react-router-dom";
import { trainingProducts } from "@/data/products";

interface TrainingMenuProps {
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const TrainingMenu = ({ onClick, className = "", mobile = false }: TrainingMenuProps) => {
  return (
    <div className={className}>
      {trainingProducts.map((product) => (
        <Link
          key={product.id}
          to={product.link}
          className={`block px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase ${
            mobile ? "text-base" : ""
          }`}
          onClick={onClick}
        >
          {product.title.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
