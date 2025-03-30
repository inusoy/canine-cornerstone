
import { Link } from "react-router-dom";
import { trainingProducts } from "@/data/products";

interface TrainingMenuProps {
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const TrainingMenu = ({ onClick, className = "", mobile = false }: TrainingMenuProps) => {
  // Find the "SALA ZABAW I EKSPLORACJI" product
  const salaZabawProduct = trainingProducts.find(
    (product) => product.title === "Sala Zabaw i Eksploracji"
  );
  
  // Get all other products
  const otherProducts = trainingProducts.filter(
    (product) => product.title !== "Sala Zabaw i Eksploracji"
  );

  return (
    <div className={className}>
      {/* First render all products except SALA ZABAW */}
      {otherProducts.map((product) => (
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
      
      {/* Then render SALA ZABAW at the bottom */}
      {salaZabawProduct && (
        <Link
          key={salaZabawProduct.id}
          to={salaZabawProduct.link}
          className={`block px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase ${
            mobile ? "text-base" : ""
          } ${mobile ? "mt-2 border-t pt-2" : "mt-2 border-t pt-2"}`}
          onClick={onClick}
        >
          {salaZabawProduct.title.toUpperCase()}
        </Link>
      )}
    </div>
  );
};
