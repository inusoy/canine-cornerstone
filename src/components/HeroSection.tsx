import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight fade-in">
            Szkoła dla psów
          </h1>
          <p className="text-lg text-muted-foreground fade-in">
            Zadbaj o Wasze wspólne życie już dziś.
          </p>
          <div className="fade-in">
            <Button
              size="lg"
              className="hover-lift uppercase font-josefin"
              onClick={() => document.getElementById("services")?.scrollIntoView()}
            >
              Zaczynamy!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
