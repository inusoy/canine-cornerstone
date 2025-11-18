import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const PsiePrzedszkole = () => {
  return (
    <>
      <Helmet>
        <title>Psie Przedszkole dla szczeniąt | Szczek Szczek Wrocław</title>
        <meta
          name="description"
          content="Zajęcia dla szczeniąt od 2. do 5. miesiąca życia. Uczymy socjalizacji, podstaw posłuszeństwa i budowania relacji. Zajęcia grupowe i indywidualne we Wrocławiu."
        />
        <link rel="canonical" href="/training/psie-przedszkole" />
        <meta property="og:title" content="Psie Przedszkole dla szczeniąt | Szczek Szczek Wrocław" />
        <meta
          property="og:description"
          content="Wsparcie dla Twojego szczeniaka w prawidłowym starcie w pieskowe życie poprzez socjalizację, habituację i podstawy posłuszeństwa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/psie-przedszkole" />
      </Helmet>
      <TrainingLayout
        title="Psie Przedszkole"
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
                price="600 zł/grupowe lub 750 zł/indywidualne"
              />
              <div className="mt-4">
                <p className="font-medium mt-2">Najbliższe grupy:</p>
                <ul className="space-y-1 mt-1">
                  <li>
                    <span className="text-primary mr-2">•</span>
                    Poniedziałki: <b>08.12 o 19:45</b>, następnie 15.12 o 19:45, 09.01 (piątek) o 20:00, 12.01 o 19:45, 19.01 o 19:45, 26.01 o 19:45</li>
                </ul>
              </div>
            </ul>
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
    </>
  );
};

export default PsiePrzedszkole;
