
const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
