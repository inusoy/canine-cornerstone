
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "Basic Obedience Training",
    description:
      "Master essential commands and establish a strong foundation for good behavior.",
    price: "From $299",
    link: "/training/obedience",
  },
  {
    title: "Puppy Kindergarten",
    description:
      "Give your puppy the best start with early socialization and basic training.",
    price: "From $249",
    link: "/training/puppy-kindergarten",
  },
  {
    title: "Specialized Training",
    description:
      "From nosework to socialisation walks, find the perfect program for your dog.",
    price: "From $399",
    link: "/training/nosework",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in">
          Our Training Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-lift fade-in bg-background/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="font-semibold text-primary">{service.price}</p>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <Link to={service.link}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
