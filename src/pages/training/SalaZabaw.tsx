import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const SalaZabaw = () => {
  return (
    <>
      <Helmet>
        <title>Sala Zabaw i Eksploracji dla psów | Szczek Szczek Wrocław</title>
        <meta
          name="description"
          content="Pierwsze takie miejsce dla psów we Wrocławiu. Specjalnie przystosowana sala, gdzie psy mogą zaspokoić potrzeby węszenia, eksploracji i stymulacji umysłowej."
        />
        <link rel="canonical" href="/training/sala-zabaw" />
        <meta property="og:title" content="Sala Zabaw i Eksploracji dla psów | Szczek Szczek Wrocław" />
        <meta
          property="og:description"
          content="Miejsce dla każdego psa niezależnie od wieku i rasy. Szczególnie polecane dla lękliwych psów. Buduj pewność siebie swojego psa poprzez zabawę i eksplorację."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/sala-zabaw" />
      </Helmet>
      <TrainingLayout
        title="Sala Zabaw i&#160;Eksploracji"
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
                <span> <b>Lokalizacja:</b><ul>Sala na Gwareckiej 8/3L we Wrocławiu</ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b>
                  <ul>
                    Salka zabaw i eksploracji jest dla każdego psa, niezależnie od wieku, wielkości czy rasy. Szczególnie mile widziane są lękuski, dla których to miejsce będzie idealne do otworzenia się.
                  </ul></span>
              </li>
              <SignupInfo
                showContactForm={false}
                showButton={false}
                buttons={[
                  {
                    text: "Kalendarz październik",
                    url: "https://docs.google.com/spreadsheets/d/1dAvs0sJ81peLZeP7BAt6qoq18Hf3n4voDdG4oMmDd6k/edit?usp=sharing"
                  },
                  {
                    text: "Kalendarz listopad",
                    url: "https://docs.google.com/spreadsheets/d/1zn-FRLZgXNX07UfR1EQSFKJEAo5s9GtBUNsMqGDrIwk/edit?gid=0#gid=0"
                  }
                ]}
                price="150 zł/90 min*"
                priceAsterisk="*czas może być krótszy, bo to Twój pies decyduje"
              />
            </ul>
          </div>
        }
      >
        {/* Video promocyjny sali */}
        <div className="mb-8">
          <video
            className="w-full max-w-sm mx-auto lg:mx-0 lg:float-left lg:mr-8 lg:mb-4 rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/sala-preview.jpg"
          >
            <source src="/clips/sala_eksploracji.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje odtwarzania wideo.
          </video>
        </div>

        <h2 className="text-2xl font-semibold mt-8">CZYM JEST SALA ZABAW I EKSPLORACJI?</h2>
        <p>
          Sala zabaw i eksploracji to pierwsze takie miejsce dla psów na mapie Wrocławia. Odpowiednio przystosowana sala pozwoli Twojemu psu zaspokoić potrzeby węszenia, eksploracji i stymulacji umysłowej.</p>

        <p>Koncept sali opiera się na jak największej decyzyjności psów. Psy podczas pobytu na sali, motywowane poukrywanymi w najróżniejszych miejscach smaczkami, zwiedzają ją. Podczas zwiedzania, psy rozwiązują różnego rodzaju zagadki węchowe i  intelektualne, a przy tym pokonują różnego rodzaju przeszkody sensoryczne, ale i obcują z przedmiotami, które mogą wywoływać strach.</p>

        <p>Za każdym razem ustawienie salki może być inne, co zapewnia psom różnorodność i brak nudy. Najważniejsze jest to, że pies sam wybiera sposób w jaki przeszukuję salkę, dzięki czemu buduje pewność siebie i niezależność. Ostatecznie jednak jest to miejsce, w którym pies może się zrelaksować i być psem.</p>
        <p>Podczas całej aktywności obecny jest behawiorysta, więc nie ma zmartwienia, że nie będziecie wiedzieć, co robić. Wizyta na salce trwa 90 min (w tym rozkładanie smaczków), ale tak naprawdę to pies zadecyduje ile będzie trwał jego czas na salce.</p>
      </TrainingLayout>
    </>
  );
};

export default SalaZabaw;
