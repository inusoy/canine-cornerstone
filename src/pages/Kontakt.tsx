
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
            
            <Card className="p-8 shadow-md mb-10">
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

            <Card className="p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-center">Napisz do nas</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Imię</label>
                  <Input
                    type="text"
                    placeholder="Twoje imię"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Twój email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Program szkoleniowy
                  </label>
                  <select className="w-full p-2 rounded-md border border-input">
                    <option value="">Wybierz program</option>
                    <option value="nosework">Nosework</option>
                    <option value="obedience">Obedience</option>
                    <option value="dog-school">Szkoła dla psów</option>
                    <option value="puppy-kindergarten">Przedszkole dla szczeniąt</option>
                    <option value="socialisation-walks">Socjalizacyjne spacery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wiadomość</label>
                  <Textarea
                    className="h-32"
                    placeholder="Opowiedz nam o swoim psie i celach szkoleniowych"
                  />
                </div>
                <Button className="w-full">Wyślij wiadomość</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontakt;
