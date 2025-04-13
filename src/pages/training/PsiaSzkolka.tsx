import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const PsiaSzkolka = () => {
  return (
    <>
      <Helmet>
        <title>Psia Szkółka - Szkolenia dla psów | Szczek Szczek</title>
        <meta 
          name="description" 
          content="Profesjonalne zajęcia z posłuszeństwa dla psów powyżej 5. miesiąca życia. Zajęcia grupowe we Wrocławiu. Nauczymy Twojego psa podstawowych komend i samokontroli." 
        />
        <link rel="canonical" href="/training/psia-szkolka" />
        <meta property="og:title" content="Psia Szkółka - Szkolenia dla psów | Szczek Szczek" />
        <meta 
          property="og:description" 
          content="Zajęcia z posłuszeństwa dla psów bez ograniczeń wiekowych. Zajęcia grupowe we Wrocławiu. Zapisz swojego psa już dziś!" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/psia-szkolka" />
      </Helmet>
      <TrainingLayout
        title="Psia Szkółka"
        subtitle=""
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Zajęcia grupowe (2-3 psy)</b></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Lokalizacja:</b><ul>Sala i teren przy Gwareckiej 8/3L.</ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b>
                  <ul>
                    Dla psów od 5. miesiąca życia w górę w momencie startu kursu, bez ograniczenia wieku.
                  </ul></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span> <b>Ile spotkań?</b><ul>6 spotkań po 45-60 minut</ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span> <b>Kiedy?</b><ul>Grupy w weekendy i w tygodniu.</ul>
                </span>
              </li>
              <SignupInfo
                showContactForm={false}
                showButton={true}
                buttonText="Kalendarz"
                buttonUrl="https://docs.google.com/spreadsheets/d/1TwzTY9bLK8lxo3W9Woflez9mRLvlkcnrQSbLvw8fo4U/edit?usp=sharing"
                price="600 zł/pakiet"
                />
            </ul>
          </div>
        }
      >
        <p>
          Mały, wielki, gruby, chudy, jamnik, golden czy doberman, każdy pies powinien znać podstawy posłuszeństwa.
        </p>

        <h2 className="text-2xl font-semibold mt-8">CZEGO UCZY PSIA SZKÓŁKA W SZCZEK SZCZEK?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Jak motywować, bawić się i skupiać na sobie psa.</li>
          <li>Praktycznych podstaw posłuszeństwa m.in. do mnie, siad, zostań, zostaw, na miejsce, noga, poczekaj - proszę.</li>
          <li>Posłuszeństwa w obecności innych psów.</li>
          <li>Cierpliwości i samokontroli.</li>
          <li>Jak ćwiczyć z psem i zwiększać odpowiednio poziom trudności.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO OTRZYMACIE?</h2>
        <p>
          Każdy uczestnik otrzyma dostęp do webinarów i materiałów przygotowanych na potrzeby kursu. Dodatkowo, dostaniecie na start powitalny prezent, coś dla psa i człowieka, a na zakończenie dyplom. Dostaniecie również zniżkę na spacer socjalizacyjny i salkę zabaw i eksploracji lub nosework.
        </p>
        <p>Zadbajcie o Waszą relację i wspólne życie już dziś!</p>
        <h2 className="text-2xl font-semibold mt-8">WAŻNE</h2>
        <p>Psia szkółka nie służy do rozwiązywania problemów behawioralnych, więc jeśli obawiasz się, że Twój pies sobie nie poradzi lub ma problemy behawioralne - skontaktuj się ze mną. Zobaczymy, co możemy z tym zrobić.</p>
      </TrainingLayout>
    </>
  );
};

export default PsiaSzkolka;
