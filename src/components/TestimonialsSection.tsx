
import { Card } from "@/components/ui/card";

export const testimonials = [
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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
