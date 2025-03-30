import { ContactForm } from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 fade-in">
            Kontakt
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
