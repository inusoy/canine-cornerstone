import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";

const SpotkaniaPrzezPlot = () => {
  return (
    <>
      <Helmet>
        <title>Spotkania Przez Płot dla psów | Szczek Szczek Wrocław</title>
        <meta
          name="description"
          content="Warsztaty komunikacyjne przez płot we Wrocławiu, ul. Mączna 6b (wejście od parku). Bezpieczne interakcje dla psów. Najbliższa edycja 15.06, 10:00-14:00."
        />
        <link rel="canonical" href="/training/spotkania-przez-plot" />
        <meta property="og:title" content="Spotkania Przez Płot dla psów | Szczek Szczek Wrocław" />
        <meta
          property="og:description"
          content="Warsztaty 'Spotkania Przez Płot' (ul. Mączna 6b, Wrocław) pozwalają psom na bezpieczne interakcje. Dowiedz się więcej i zapisz się!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/spotkania-przez-plot" />
      </Helmet>
      <TrainingLayout
        title="Spotkania Przez Płot"
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <b>Lokalizacja:</b>{' '}
                  <a
                    href="https://maps.app.goo.gl/xwXLZd8fydas9UN99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Plac na Mącznej 6b, Wrocław
                  </a>
                  . Wejście od strony parku.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b>
                  <ul>
                    Dla psów, które przejawiają wysoki poziom emocji w kontaktach z innymi psami. Dla opiekunów, którzy chcą zapewnić swoim psom bezpieczne warunki do nauki komunikacji i obniżenia napięcia. Dla psów, którym trudno jest nawiązywać bezpośrednie interakcje.
                  </ul>
                </span>
              </li>
              <SignupInfo
                showFacebook={false}
                showInstagram={false}
                showSMS={false}
                showContactForm={true}
                showButton={false}
                price="180 zł"
                buttons={[
                  {
                    text: "Formularz zapisowy 20.07",
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSexAjW2g9oeHxU1FfMK8FqSiHAOmwNlegNI8zdTn3fQ5ZMhDQ/viewform"
                  },
                  {
                    text: "Formularz zapisowy 26.07",
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSexAjW2g9oeHxU1FfMK8FqSiHAOmwNlegNI8zdTn3fQ5ZMhDQ/viewform"
                  }
                ]}
              />
              <li className="flex items-start">
                <span className="font-semibold">Wysłanie ankiety nie jest równoznaczne z zapisem na spotkanie. Opiekunowie zakwalifikowanych psów otrzymają SMS z potwierdzeniem.</span>
              </li>
            </ul>
          </div>
        }
      >
        <p>
          Zamysłem spotkań przez płot jest to, że bariera pomiędzy psami pomaga zwiększyć poczucie bezpieczeństwa psów (ale i opiekunów), a przy tym pomaga obniżyć psie emocje przed ewentualną bezpośrednią interakcją. Przy czym psy mogą prezentować zachowania, które byłyby dla nich trudne w bezpośrednich interakcjach ze względu na wysoki poziom emocji.
        </p>
        <p>
          Podczas czterogodzinnych warsztatów każdy pies będzie miał kilka wyjść, podczas których będzie miał interakcje z różnymi psami w parach (ale jest opcja też na większą ilość psów). W kontrolowanych warunkach, z pomocą bariery, psy uczą się spokoju i właściwej komunikacji.
        </p>

        <h2 className="text-2xl font-semibold mt-8">DLACZEGO WARTO WYBRAĆ SPOTKANIA PRZEZ PŁOT?</h2>
        <p>Głównym celem tych warsztatów jest stworzenie bezpiecznej przestrzeni, gdzie psy mogą, mimo bariery, obserwować inne psy, uczyć się ich sygnałów i stopniowo obniżać poziom swoich emocji. Bariera daje psom (i ich opiekunom) większy komfort i poczucie kontroli.</p>
        
        <h2 className="text-2xl font-semibold mt-8">CZY PIES BĘDZIE IZOLOWANY?</h2>
        <p>Nie! Chodzi o kontrolowaną interakcję na odległość. Psy mają możliwość obserwacji, komunikacji wokalnej i zapachowej. Bariera służy jako narzędzie do budowania pewności siebie i redukcji stresu, a nie jako forma izolacji. Umożliwia psom naukę w ich własnym tempie.</p>
        
        <h2 className="text-2xl font-semibold mt-8">CO WYRÓŻNIA SPOTKANIA PRZEZ PŁOT W SZCZEK SZCZEK?</h2>
        <p>Kładziemy nacisk na indywidualne potrzeby każdego psa. Podczas warsztatów psy są dobierane w pary (lub małe grupy, jeśli sytuacja na to pozwala) w sposób przemyślany. Celem jest zapewnienie każdemu psu pozytywnych doświadczeń i możliwości nauki spokojnego reagowania na obecność innych psów.</p>
        
        <h2 className="text-2xl font-semibold mt-8">JAK WYGLĄDAJĄ WARSZTATY SPOTKAŃ PRZEZ PŁOT?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Warsztaty trwają cztery godziny.</li>
          <li>Każdy pies ma kilka indywidualnych sesji (wyjść) do strefy interakcji przy płocie.</li>
          <li>Psy pracują w parach, z możliwością dostosowania do większej liczby psów, jeśli jest to korzystne.</li>
          <li>Cały czas jestem z Wami, monitoruję sytuację, tłumaczę zachowania psów i pomagam w budowaniu pozytywnych skojarzeń.</li>
          <li>Opiekunowie uczą się, jak wspierać swojego psa w trudnych dla niego sytuacjach.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO DAJĄ PSOM SPOTKANIA PRZEZ PŁOT?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Zwiększają poczucie bezpieczeństwa psa w obecności innych psów.</li>
          <li>Pomagają obniżyć poziom emocji i stresu związanego z interakcjami.</li>
          <li>Umożliwiają psom prezentowanie i naukę zachowań komunikacyjnych w bezpiecznym środowisku.</li>
          <li>Wspierają budowanie pozytywnych skojarzeń z innymi psami.</li>
          <li>Uczą psy radzenia sobie z frustracją lub nadmierną ekscytacją.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO ZYSKASZ TY JAKO OPIEKUN?</h2>
        <p>
          Zrozumiesz lepiej komunikację swojego psa i nauczysz się, jak go wspierać. Dowiesz się, jak interpretować sygnały wysyłane przez psy i jak reagować, aby pomóc psu poczuć się pewniej. Zdobędziesz narzędzia do pracy nad emocjami swojego psa również w codziennych sytuacjach. To także okazja do wzmocnienia Waszej relacji.
        </p>

        <h2 className="text-2xl font-semibold mt-8">WAŻNE</h2>
        <p>
          Spotkania przez płot są formą wsparcia w procesie socjalizacji i modyfikacji zachowań, ale nie zastąpią pełnej terapii behawioralnej w przypadku głębokich problemów. Jeśli Twój pies wykazuje silne zachowania agresywne lub lękowe, skonsultuj się ze mną – być może potrzebna będzie najpierw indywidualna praca.
        </p>
        {/* <p>
          Zamysłem spotkań przez płot jest to, że bariera pomiędzy psami pomaga zwiększyć poczucie bezpieczeństwa psów (ale i opiekunów), a przy tym pomaga obniżyć psie emocje przed ewentualną bezpośrednią interakcją. Przy czym psy mogą prezentować zachowania, które byłyby dla nich trudne w bezpośrednich interakcjach ze względu na wysoki poziom emocji.
        </p>
        <p>
          Podczas czterogodzinnych warsztatów każdy pies będzie miał kilka wyjść, podczas których będzie miał interakcje z różnymi psami w parach (ale jest opcja też na większą ilość psów). W kontrolowanych warunkach, z pomocą bariery, psy uczą się spokoju i właściwej komunikacji.
        </p>

        <h2 className="text-2xl font-semibold mt-8">DLACZEGO WARTO WYBRAĆ SPOTKANIA PRZEZ PŁOT?</h2>
        <p>Głównym celem tych warsztatów jest stworzenie bezpiecznej przestrzeni, gdzie psy mogą, mimo bariery, obserwować inne psy, uczyć się ich sygnałów i stopniowo obniżać poziom swoich emocji. Bariera daje psom (i ich opiekunom) większy komfort i poczucie kontroli.</p>
        
        <h2 className="text-2xl font-semibold mt-8">CZY PIES BĘDZIE IZOLOWANY?</h2>
        <p>Nie! Chodzi o kontrolowaną interakcję na odległość. Psy mają możliwość obserwacji, komunikacji wokalnej i zapachowej. Bariera służy jako narzędzie do budowania pewności siebie i redukcji stresu, a nie jako forma izolacji. Umożliwia psom naukę w ich własnym tempie.</p>
        
        <h2 className="text-2xl font-semibold mt-8">CO WYRÓŻNIA SPOTKANIA PRZEZ PŁOT W SZCZEK SZCZEK?</h2>
        <p>Kładziemy nacisk na indywidualne potrzeby każdego psa. Podczas warsztatów psy są dobierane w pary (lub małe grupy, jeśli sytuacja na to pozwala) w sposób przemyślany. Celem jest zapewnienie każdemu psu pozytywnych doświadczeń i możliwości nauki spokojnego reagowania na obecność innych psów.</p>
        
        <h2 className="text-2xl font-semibold mt-8">JAK WYGLĄDAJĄ WARSZTATY SPOTKAŃ PRZEZ PŁOT?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Warsztaty trwają cztery godziny.</li>
          <li>Każdy pies ma kilka indywidualnych sesji (wyjść) do strefy interakcji przy płocie.</li>
          <li>Psy pracują w parach, z możliwością dostosowania do większej liczby psów, jeśli jest to korzystne.</li>
          <li>Cały czas jestem z Wami, monitoruję sytuację, tłumaczę zachowania psów i pomagam w budowaniu pozytywnych skojarzeń.</li>
          <li>Opiekunowie uczą się, jak wspierać swojego psa w trudnych dla niego sytuacjach.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO DAJĄ PSOM SPOTKANIA PRZEZ PŁOT?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Zwiększają poczucie bezpieczeństwa psa w obecności innych psów.</li>
          <li>Pomagają obniżyć poziom emocji i stresu związanego z interakcjami.</li>
          <li>Umożliwiają psom prezentowanie i naukę zachowań komunikacyjnych w bezpiecznym środowisku.</li>
          <li>Wspierają budowanie pozytywnych skojarzeń z innymi psami.</li>
          <li>Uczą psy radzenia sobie z frustracją lub nadmierną ekscytacją.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO ZYSKASZ TY JAKO OPIEKUN?</h2>
        <p>
          Zrozumiesz lepiej komunikację swojego psa i nauczysz się, jak go wspierać. Dowiesz się, jak interpretować sygnały wysyłane przez psy i jak reagować, aby pomóc psu poczuć się pewniej. Zdobędziesz narzędzia do pracy nad emocjami swojego psa również w codziennych sytuacjach. To także okazja do wzmocnienia Waszej relacji.
        </p>

        <h2 className="text-2xl font-semibold mt-8">WAŻNE</h2>
        <p>
          Spotkania przez płot są formą wsparcia w procesie socjalizacji i modyfikacji zachowań, ale nie zastąpią pełnej terapii behawioralnej w przypadku głębokich problemów. Jeśli Twój pies wykazuje silne zachowania agresywne lub lękowe, skonsultuj się ze mną – być może potrzebna będzie najpierw indywidualna praca.
        </p> */}
      </TrainingLayout>
    </>
  );
};

export default SpotkaniaPrzezPlot;