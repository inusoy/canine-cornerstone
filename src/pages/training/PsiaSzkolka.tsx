
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const PsiaSzkolka = () => {
  return (
    <TrainingLayout
      title="Psia Szkółka"
      subtitle=""
      imageSrc="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
      imageAlt="Szkolenie w Psiej Szkółce"
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
            <SignupInfo showContactForm={false} />
          </ul>
          <PriceTag>600 zł/pakiet</PriceTag>
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
  );
};

export default PsiaSzkolka;
