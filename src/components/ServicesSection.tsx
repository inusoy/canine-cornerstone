
import { ServiceCard } from "@/components/products/ServiceCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  // Get featured products (limit to 5 for homepage)
  const featuredProducts = products
    .filter(p => p.showOnHomepage)
    .sort((a, b) => a.homepagePriority - b.homepagePriority)
    .slice(0, 5);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in text-primary font-bryndan uppercase">
          OFERTA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ServiceCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="hover-lift">
            <Link to="/offer">ZOBACZ PEŁNĄ OFERTĘ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
