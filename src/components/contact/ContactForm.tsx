import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "BŁĄD FORMULARZA",
        description: "PROSZĘ WYPEŁNIĆ WSZYSTKIE WYMAGANE POLA",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_cajh2hl',
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
        title: "WIADOMOŚĆ WYSŁANA",
        description: "DZIĘKUJEMY ZA KONTAKT. ODPOWIEMY NAJSZYBCIEJ JAK TO MOŻLIWE."
      });
      setFormData({ name: "", email: "", program: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "BŁĄD",
        description: "NIE UDAŁO SIĘ WYSŁAĆ WIADOMOŚCI. SPRÓBUJ PONOWNIE PÓŹNIEJ.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center text-primary font-bryndan uppercase">NAPISZ DO MNIE</h3>
      <form className="space-y-4 font-josefin" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2 uppercase">IMIĘ</label>
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
          <label className="block text-sm font-medium mb-2 uppercase">EMAIL</label>
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
          <label className="block text-sm font-medium mb-2 uppercase">
            PROGRAM SZKOLENIOWY
          </label>
          <select 
            className="w-full p-2 rounded-md border border-input"
            name="program"
            value={formData.program}
            onChange={handleChange}
          >
            <option value="">WYBIERZ PROGRAM</option>
            <option value="nosework">NOSEWORK</option>
            <option value="obedience">OBEDIENCE</option>
            <option value="dog-school">SZKOŁA DLA PSÓW</option>
            <option value="puppy-kindergarten">PRZEDSZKOLE DLA SZCZENIĄT</option>
            <option value="socialisation-walks">SOCJALIZACYJNE SPACERY</option>
            <option value="other">INNE</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 uppercase">WIADOMOŚĆ</label>
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
          className="w-full uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? "WYSYŁANIE..." : "WYŚLIJ WIADOMOŚĆ"}
        </Button>
      </form>
    </Card>
  );
};
