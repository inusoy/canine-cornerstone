
import { ServiceCard } from "@/components/products/ServiceCard";
import { trainingProducts } from "@/data/products";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in text-primary font-bryndan uppercase">
          OFERTA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trainingProducts.map((product) => (
            <ServiceCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;