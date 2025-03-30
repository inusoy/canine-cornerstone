import { ContactForm } from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export default function Kontakt() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
            Kontakt
          </h1>
          <ContactForm />
          <div className="mt-10">
            <MapSection />
          </div>
        </div>
      </div>
    </main>
  );
}
