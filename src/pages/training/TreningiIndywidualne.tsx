
import TrainingLayout from "@/components/training/TrainingLayout";

const TreningiIndywidualne = () => {
  return (
    <TrainingLayout
      title="Indywidualne Treningi"
      subtitle=""
      imageSrc="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01"
      imageAlt="Trening indywidualny z psem"
      sidebarContent={
        <div className="space-y-4">
        <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><b>Zajęcia indywidualne</b></span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span> <b>Lokalizacja:</b><ul>Sala na Gwareckiej 8/3l we Wrocławiu lub umówione wcześniej miejsce.</ul>
</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <ul>
      <h3 className="text-2xl font-semibold">JAK SIĘ ZAPISAĆ?</h3>
      </ul>
        </li>
        <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span> Poprzez wiadomość prywatną na Facebooku(hiperłącze),</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span> Poprzez wiadomość prywatną na Instagramie(hiperłącze),</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>  Smsem +48 504 267 825.</span>
          </li>
      </ul>
      <p className="font-semibold text-primary">120 zł + ewentualny dojazd/60 min</p>
    </div>
      }
    >
      <p>
      Treningi indywidualne są przeznaczone dla psów i opiekunów, którzy chcą nauczyć się posłuszeństwa od podstaw, doszlifować wybrane komendy, nauczyć się sztuczek lub zacząć coś zupełnie nowego np. trening poprzez kształtowanie - zabawę z klikerem.
      </p>

      <p>Dobrze zrobiony trening, poza nauką konkretnej umiejętności, wzmacnia relację z psem. Odkryjcie zabawę płynącą ze wspólnych treningów! </p>
      <h2 className="text-2xl font-semibold mt-8">PRZYKŁADOWE RZECZY, KTÓRE MOŻEMY ĆWICZYĆ</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Przywołanie.</li>
        <li>Hasła statyczne np. siad, leżeć, na miejsce.</li>
      <li>Chodzenie przy nodze.</li>
      <li>Zostawianie i wypluwanie rzeczy.</li>
      <li>Nauka cierpliwości i odpoczywania.</li>
      <li>Sztuczki np. obroty, ósemki, przechodzenie pod nogami, akuku, pif paf, omijanie pachołka.</li>
      <li>Kształtowanie - praca z klikerem i bardziej zaawansowane sztuczki.</li>
      <li>i inne...</li>
    </ul>
      
    </TrainingLayout>
  );
};

export default TreningiIndywidualne;
