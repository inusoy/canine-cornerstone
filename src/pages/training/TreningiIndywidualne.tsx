import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const TreningiIndywidualne = () => {
  return (
    <TrainingLayout
      title="Indywidualne Treningi"
      subtitle=""
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
            <SignupInfo showContactForm={false} price="120 zł + ewentualny dojazd/60 min" />
          </ul>
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
