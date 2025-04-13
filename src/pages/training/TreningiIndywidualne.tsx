import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const TreningiIndywidualne = () => {
  return (
    <>
      <Helmet>
        <title>Indywidualne Treningi dla psów | Szczek Szczek Wrocław</title>
        <meta 
          name="description" 
          content="Treningi indywidualne dla psów i opiekunów. Nauka posłuszeństwa, komend, sztuczek oraz pracy z klikerem. Wzmocnij relację z psem poprzez wspólne treningi." 
        />
        <link rel="canonical" href="/training/treningi-indywidualne" />
        <meta property="og:title" content="Indywidualne Treningi dla psów | Szczek Szczek Wrocław" />
        <meta 
          property="og:description" 
          content="Naucz swojego psa posłuszeństwa, sztuczek i komend podczas indywidualnych treningów. Zajęcia personalizowane do potrzeb każdego psa." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/treningi-indywidualne" />
      </Helmet>
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
    </>
  );
};

export default TreningiIndywidualne;
