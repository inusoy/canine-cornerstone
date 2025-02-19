
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
