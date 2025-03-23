
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";

const Kontakt = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold mb-6 text-center">Kontakt</h1>
            
            <Card className="p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ContactInfo contactInfo={contactInfo} />
                </div>
                
                <div className="h-[300px] md:h-auto">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8798290515224!2d17.0261458!3d51.1075649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2796ca4ca55%3A0xb26e54dbb10a5bbd!2sGwarecka%208%2C%2050-131%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1718115201458!5m2!1sen!2spl" 
                    className="w-full h-full rounded-md border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Szczek Szczek location"
                  ></iframe>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontakt;
