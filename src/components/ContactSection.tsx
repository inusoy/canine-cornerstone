
import { ContactForm } from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 fade-in text-primary uppercase font-bryndan">
            KONTAKT
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
