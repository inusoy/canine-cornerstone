import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Błąd formularza",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'service_jzmsyi5',
        'template_i2n6ctp',
        {
          to_email: 'kontakt@szczekszczek.pl',
          from_name: formData.name,
          from_email: formData.email,
          program: formData.program,
          message: formData.message,
        },
        '_kObRF1b779O1PnpK'
      );

      toast({
        title: "Wiadomość wysłana",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        program: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Imię</label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Twoje imię"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Twój email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Program szkoleniowy
                  </label>
                  <select 
                    className="w-full p-2 rounded-md border border-input"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                  >
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
                    name="message"
                    className="h-32"
                    placeholder="Opowiedz nam o swoim psie i celach szkoleniowych"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                </Button>
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
