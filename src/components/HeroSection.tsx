
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-32 md:pb-48 lg:pb-64 px-4 flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="animate-float">
          <Logo 
            size="lg4" 
            showText={true}
            className="fade-in scale-150 md:scale-[2] lg:scale-[2.5]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
