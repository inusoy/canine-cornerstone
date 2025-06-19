import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";

const HokusPokusFunFocus = () => {
  return (
    <>
      <Helmet>
        <title>Hokus Pokus Fun&Focus - Kurs Sztuczek i Motywacji dla Psów | Szczek Szczek Wrocław</title>
        <meta
          name="description"
          content="Odkryj kurs 'Hokus Pokus Fun&Focus' w Szczek Szczek Wrocław! Naucz psa sztuczek, podkręć motywację i bawcie się razem. Zajęcia grupowe i indywidualne. Terminy: Wtorki, Środy, Piątki."
        />
        <link rel="canonical" href="/training/hokus-pokus-funfocus" />
        <meta property="og:title" content="Hokus Pokus Fun&Focus - Kurs Sztuczek i Motywacji dla Psów | Szczek Szczek Wrocław" />
        <meta
          property="og:description"
          content="Odkryj kurs 'Hokus Pokus Fun&Focus' w Szczek Szczek Wrocław! Naucz psa sztuczek, podkręć motywację i bawcie się razem. Zajęcia grupowe i indywidualne. Terminy: Wtorki, Środy, Piątki."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/hokus-pokus-funfocus" />
      </Helmet>
      <TrainingLayout
        title="Hokus Pokus Fun&Focus"
        backgroundImage={"/Bez tytułu.jpg"}
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Zajęcia:</b> Grupowe (do 3 psów) lub indywidualne.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Lokalizacja:</b> Sala na Gwareckiej 8/3L we Wrocławiu.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b> Dla psów znających podstawy posłuszeństwa. Dla opiekunów, którzy chcą pogłębić relację z psem, nauczyć się nowych umiejętności i świetnie się razem bawić.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Ile spotkań?</b> 5 spotkań, każde po 45-60 minut.</span>
              </li>
              <SignupInfo
                showContactForm={false}
                price="450 zł/grupowe LUB 550 zł/indywidualne"
                priceAsterisk="*Cena za cały kurs (5 spotkań)."
              />
              <div className="mt-4">
                <p className="font-medium mt-2">Najbliższe grupy:</p>
                <ul className="space-y-1 mt-1">
                  <li>
                    <span className="text-primary mr-2">•</span>
                    Wtorki: <b>15.07</b>, 22.07, 29.07, 05.08, 12.08 o 18:00</li>
                </ul>
              </div>
            </ul>
          </div>
        }
      >
        {
        <p></p>/* <p className="font-bold text-lg mb-2">CZUJESZ, ŻE CHCESZ ROBIĆ Z PSEM COŚ WIĘCEJ? CHCESZ PODKRĘCIĆ JEGO MOTYWACJĘ W TRENINGU? A MOŻE NAUCZYĆ SIĘ SZTUCZEK I PODSTAW KSZTAŁTOWANIA, SUPER SIĘ RAZEM BAWIĄC? TE ZAJĘCIA SĄ DLA WAS!</p>
        <p>Fun & Focus wprowadzi Was w tajniki motywowania psa! Poznacie nowe sztuczki, nauczycie się uczyć psa poprzez kształtowanie, a nawet rozwiązywać z nim nietypowe zagadki (czy znajdzie on ukryty smakołyk pod kubeczkiem?). To doskonała okazja do budowania więzi i lepszego zrozumienia swojego pupila, a także do świetnej zabawy, która sprawi, że Wasze treningi już nigdy nie będą nudne! Każde z pięciu spotkań będzie naładowane wiedzą, którą będziecie mogli wykorzystać w przyszłości, we wszystkich treningach!</p>

        <h2 className="text-2xl font-semibold mt-8">CZEGO UCZY HOKUS POKUS FUN&FOCUS W SZCZEK SZCZEK?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Jak dobrze motywować psa i poznacie wiele nowych sygnałów nagrody.</li>
          <li>Nauki nowych, efektownych sztuczek.</li>
          <li>Podstaw kształtowania, które przydadzą Wam się w przyszłości do nauki bardziej zaawansowanych zachowań.</li>
          <li>Jak trenować z psem tak, żebyście oboje mieli z tego przyjemność i budowali silniejszą relację.</li>
          <li>Zrozumienia podstawowych zasad uczenia się psa i efektywnego ich wykorzystania.</li>
          <li>Rozwiązywania prostych zagadek i problemów, co stymuluje psi umysł.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO OTRZYMACIE?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Materiały podsumowujące po każdych zajęciach.</li>
          <li>Dostęp do zamkniętej grupy wsparcia online.</li>
          <li>Indywidualne podejście i wskazówki dostosowane do potrzeb Twojego psa (nawet w zajęciach grupowych).</li>
          <li>Mnóstwo inspiracji do dalszej pracy i zabawy z psem.</li>
          <li>Gwarancję, że Wasze wspólne treningi staną się źródłem radości i satysfakcji.</li>
          <li>Dyplom ukończenia kursu.</li>
        </ul>
        <p className="mt-4">Zadbajcie o Waszą relację i wspólne, radosne chwile już dziś!</p> */}
      </TrainingLayout>
    </>
  );
};

export default HokusPokusFunFocus;
