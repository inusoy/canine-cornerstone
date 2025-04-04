const HeroSection = () => {
  return (
    <section className="pt-36 pb-28 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Optional small decorative element */}
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
          
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight fade-in">
            Szkoła dla&#160;psów
          </h1>
          
          <p className="text-xl text-muted-foreground fade-in uppercase tracking-wider max-w-2xl mx-auto">
            Zadbaj o Wasze wspólne życie już&#160;dziś.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
