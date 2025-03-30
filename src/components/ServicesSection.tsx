
import { ProductCard } from "@/components/products/ProductCard";
import { getHomePageProducts } from "@/data/products";

const ServicesSection = () => {
  const products = getHomePageProducts();

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in">
          Nasza Oferta
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
