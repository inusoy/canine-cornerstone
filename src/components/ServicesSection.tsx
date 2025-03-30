
import { ServiceCard } from "@/components/products/ServiceCard";
import { products } from "@/data/products";

const ServicesSection = () => {
  // Use all products instead of just homepage products
  const allProducts = products;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in text-primary font-bryndan uppercase">
          NASZA OFERTA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ServiceCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
