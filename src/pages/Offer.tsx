
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceCard } from "@/components/products/ServiceCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Offer = () => {
  // Find the "SALA ZABAW I EKSPLORACJI" product
  const salaZabawProduct = products.find(
    (product) => product.title === "Sala Zabaw i Eksploracji"
  );
  
  // Get all other products
  const otherProducts = products.filter(
    (product) => product.title !== "Sala Zabaw i Eksploracji"
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12 fade-in text-primary font-bryndan uppercase">
          OFERTA
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {otherProducts.map((product) => (
            <ServiceCard key={product.id} product={product} />
          ))}
        </div>
        
        {salaZabawProduct && (
          <div className="w-full">
            <ServiceCard product={salaZabawProduct} className="col-span-3" />
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button asChild className="hover-lift">
            <Link to="/home">Powrót do strony głównej</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offer;
