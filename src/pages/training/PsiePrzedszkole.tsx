import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const PsiePrzedszkole = () => {
  return (
    <TrainingLayout
      title="Psie Przedszkole"
      subtitle=""
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Zajęcia grupowe (2-3 psy) lub indywidualne</b></span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Lokalizacja:</b><ul>Sala na Gwareckiej 8/3L.</ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Dla kogo?</b><ul>Dla szczeniaków od 2. do 5. miesiąca życia w momencie startu kursu.</ul>
              </span>
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
              buttonUrl="https://docs.google.com/spreadsheets/d/1TwzTY9bLK8lxo3W9Woflez9mRLvlkcnrQSbLvw8fo4U/edit?usp=sharing" />
          </ul>
          <PriceTag>600 zł/grupowe lub 750 zł/indywidualne</PriceTag>
        </div>
      }
    >
      <p>
        Bycie opiekunem szczeniaczka to nie tylko przyjemność, ale także wielka odpowiedzialność!
      </p>
      <p>Tak jak u ludzi, u psów okres dziecięcy (szczenięcy) jest bardzo istotny dla dalszego rozwoju! Dlatego tak ważne jest to, żeby nie zaniedbać tego czasu i wesprzeć swojego psa w prawidłowym starcie w pieskowe życie. Jak to zrobić? Poprzez odpowiednią socjalizację, habituację, budowanie relacji i wprowadzenie do podstaw posłuszeństwa!</p>

      <h2 className="text-2xl font-semibold mt-8">CZEGO UCZY PSIEDSZKOLE W SZCZEK SZCZEK?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Jak motywować, bawić się i skupiać na sobie szczeniaka.</li>
        <li>Podstaw posłuszeństwa m.in. do mnie, siad, zostań, zostaw, na miejsce, noga, poczekaj - proszę.</li>
        <li>Pewności siebie poprzez elementy integracji sensorycznej.</li>
        <li>Jak prawidłowo socjalizować psa.</li>
        <li>Wprowadzenia do treningu kooperacyjnego.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">CO OTRZYMACIE?</h2>
      <p>
        Każdy uczestnik otrzyma dostęp do webinarów i materiałów przygotowanych na potrzeby kursu. Dodatkowo, dostaniecie na start powitalny prezent, coś dla psa i człowieka, a na zakończenie dyplom. Dostaniecie również zniżkę na spacer socjalizacyjny i salkę zabaw i eksploracji.
      </p>
      <p>Zadbajcie o Waszą relację i dalsze wspólne życie już dziś!</p>

    </TrainingLayout>
  );
};

export default PsiePrzedszkole;
