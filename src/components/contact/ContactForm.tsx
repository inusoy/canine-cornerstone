import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";

export const ContactForm = () => {
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
    // ...existing validation and email sending logic...
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
      setFormData({ name: "", email: "", program: "", message: "" });
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
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6 fade-in shadow-md">
        <div>
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </Card>
      <Card className="p-6 fade-in shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Napisz do nas</h3>
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
  );
};
