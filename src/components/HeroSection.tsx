import { Logo } from "./ui/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import OptimizedImage from "./ui/optimized-image";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative flex flex-col justify-center min-h-screen px-4 md:pt-36 md:pb-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          {!isMobile && (<Logo showText={false} className="mx-auto justify-center" size="lg96" />
          )}
          {isMobile && (<Logo showText={false} className="mx-auto justify-center" size="lg48" />
          )}
          <h1 className="text-4xl md:text-7xl font-semibold leading-tight fade-in flex flex-col items-center">
            <span className="block">Szczek&#160;Szczek</span>
            <span className="block text-[0.85em]">Szkoła&#160;dla&#160;psów</span>
          </h1>

          <p className="text-xl text-muted-foreground fade-in uppercase tracking-wider max-w-2xl mx-auto pt-1">
            Zadbaj o Wasze wspólne&#160;życie&#160;już&#160;dziś.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
