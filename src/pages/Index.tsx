
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PawPrint } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-6 w-6 text-primary animate-float" />
              <span className="font-playfair text-xl font-semibold">
                Canine Academy
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors"
              >
                Testimonials
              </a>
              <Button
                variant="default"
                className="hover-lift"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight fade-in">
              Transform Your Dog's Behavior with Expert Training
            </h1>
            <p className="text-lg text-muted-foreground fade-in">
              Professional dog training services tailored to your companion's unique
              needs. Build a stronger bond through understanding and positive
              reinforcement.
            </p>
            <div className="fade-in">
              <Button
                size="lg"
                className="hover-lift"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 fade-in">
              Meet Your Trainer
            </h2>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Trainer with dogs"
                className="w-full h-72 object-cover rounded-lg mb-8"
              />
            </div>
            <p className="text-lg text-muted-foreground fade-in">
              With over a decade of experience in dog training and behavior
              modification, we understand that every dog is unique. Our approach
              combines positive reinforcement with proven techniques to create
              lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 fade-in">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 fade-in bg-background/50 backdrop-blur-sm"
              >
                <p className="italic mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 fade-in">
              Start Your Training Journey
            </h2>
            <Card className="p-6 fade-in">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border border-input"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-2 rounded-md border border-input h-32"
                    placeholder="Tell us about your dog"
                  />
                </div>
                <Button className="w-full hover-lift">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-5 w-5 text-primary" />
              <span className="font-playfair font-semibold">Canine Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Basic Obedience Training",
    description:
      "Master essential commands and establish a strong foundation for good behavior.",
    price: "From $299",
  },
  {
    title: "Advanced Training",
    description:
      "Take your dog's skills to the next level with advanced commands and off-leash control.",
    price: "From $499",
  },
  {
    title: "Behavior Modification",
    description:
      "Address specific behavioral issues with personalized training programs.",
    price: "From $399",
  },
];

const testimonials = [
  {
    text: "The transformation in my dog's behavior has been incredible. The training methods are effective and humane.",
    name: "Sarah Johnson",
    location: "New York, NY",
  },
  {
    text: "Professional, patient, and truly passionate about helping dogs and their owners succeed.",
    name: "Michael Chen",
    location: "San Francisco, CA",
  },
];

export default Index;
