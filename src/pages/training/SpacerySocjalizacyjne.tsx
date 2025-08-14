import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import PriceTag from "@/components/training/PriceTag";
import SignupInfo from "@/components/training/SignupInfo";
import OptimizedImage from "@/components/ui/optimized-image";

const SpacerySocjalizacyjne = () => {
  return (
    <>
      <Helmet>
        <title>Spacery Socjalizacyjne dla psów | Szczek Szczek Wrocław</title>
        <meta
          name="description"
          content="Spacery socjalizacyjne to bezpieczna forma poznawania psów ze sobą. Małe grupy 2-4 psów dobieranych indywidualnie. Pomagamy psom nauczyć się komunikacji."
        />
        <link rel="canonical" href="/training/spacery-socjalizacyjne" />
        <meta property="og:title" content="Spacery Socjalizacyjne dla psów | Szczek Szczek Wrocław" />
        <meta
          property="og:description"
          content="Dzięki kontrolowanym warunkom, szanowaniu granic i nie forsowaniu interakcji, psy mogą w spokoju poznawać się i rozmawiać ze sobą."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/spacery-socjalizacyjne" />
      </Helmet>
      <TrainingLayout
        title="Spacery Socjalizacyjne"
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Małe grupy 2-4 psy</b></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span> <b>Lokalizacja:</b><ul>Różne parki i lasy we Wrocławiu i okolicach.</ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b>
                  <ul>
                    Dla psów, które nie mają zbyt wielu psich przyjaciół, reagują zbyt emocjonalnie na inne psy. Dla psów, które szczekają lub ciągną do innych psów, albo na spacerach nie zwracają uwagi na opiekuna.
                  </ul></span>
              </li>
              <SignupInfo
                showFacebook={false}
                showInstagram={false}
                showSMS={false}
                showContactForm={false}
                showButton={false}
                buttons={[
                  {
                    text: "Formularz zapisowy sierpień",
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeZMJYlGb2MSn05uKfWmv2Jul_vn2Fr8Qtyj5QOpp3rQyjbcw/viewform"
                  },
                  {
                    text: "Formularz zapisowy wrzesień",
                    url: "https://docs.google.com/forms/d/1qmX9_Nd5G3Fa3Ain5kq0C5d8R2cBJ68E6joIBrMZc2I/viewform?edit_requested=true"
                  }
                ]}
                price="80 zł/spacer"
              />
            </ul>
            <li className="flex items-start">
              <span className="font-semibold">Wysłanie ankiety nie jest równoznaczne z zapisem na spotkanie. Opiekunowie zakwalifikowanych psów otrzymają SMS z potwierdzeniem.</span>
            </li>
          </div>
        }
      >
        <div className="w-full pt-4">
          <OptimizedImage
            src="/images/socjale.jpg"
            alt="Spacery socjalizacyjne - psy biegające po trawie"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>
        <p>
          Spacery socjalizacyjne to najbezpieczniejsza i jedna z najlepszych form poznawania psów ze sobą. Dzięki kontrolowanym warunkom, szanowaniu granic i nie forsowaniu interakcji, psy mogą w spokoju poznawać się i „rozmawiać" ze sobą.
        </p>
        <p>W psich relacjach, tak jak ludzkich, nie chodzi tylko o ilość, ale i o jakość!</p>

        <h2 className="text-2xl font-semibold mt-8">DLACZEGO NAZYWAM SWOJE SPACERY KOMUNIKACYJNYMI?</h2>
        <p>Bo dzięki kontrolowanym warunkom, i szanowaniu granic psy mogą w spokoju poznawać się i „rozmawiać" ze sobą, co jest głównym celem moich spacerów.</p>
        <h2 className="text-2xl font-semibold mt-8">CZY TO ZNACZY, ŻE PIES BĘDZIE NA SIŁĘ WPYCHANY W INTERAKCJE I ZMUSZANY DO KONTAKTU?</h2>
        <p>Nie! Uważam, że psy powinny zapoznawać się i uczyć komunikacji w spokojnym tempie z odpowiednio dobranymi psami. Poza tym, każdy pies jest inny, dla jednego ważnym aspektem nauki będzie stawianie granic, a dla drugiego wyjście z interakcji lub w ogóle omijanie psów.</p>
        <h2 className="text-2xl font-semibold mt-8">CO WYRÓŻNIA SPACERY SOCJALIZACYJNE SZCZEK SZCZEK?</h2>
        <p>Nie ma u mnie losowych grup, psy na spacerze są dobierane do siebie, dlatego samo zgłoszenie nie daje gwarancji uczestnictwa w spacerze. Nie znajdziecie u mnie również części treningowej i masy sypiących się smaczków, bo chcę, żeby psia komunikacja była jak najmniej zaburzona. Stawiam na psią decyzyjność (nie byle jaką, podejmowane decyzje mają być dobre) i rozbudowywanie psiego wachlarza komunikacyjnego.</p>
        <h2 className="text-2xl font-semibold mt-8">JAK WYGLĄDA SPACER SOCJALIZACYJNY?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Spotykamy się w małych grupach 2-3 psy (w grupach dobrze mi znanych do 4 psów).</li>
          <li>Psy są na smyczach i linkach.</li>
          <li>Cały czas jestem z Wami, dbam o odległości, kieruję interakcjami i tłumaczę Wam, co się dzieje. W razie większych odległości, każdy opiekun dostaje krótkofalówkę, przez którą można się komunikować.</li>
          <li>Pomagamy psom „rozmawiać" między sobą.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO DAJĄ PSOM SPACERY SOCJALIZACYJNE?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pies uczy się radzić sobie z emocjami.</li>
          <li>Poprawia się relacja psa z opiekunem.</li>
          <li>Pies uczy się komunikować z innymi psami.</li>
          <li>Mogą nawiązać się psie przyjaźnie.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO ZYSKASZ TY?</h2>
        <p>
          Wytłumaczę Ci interakcje na linii pies - pies, w sposób, który pomoże przenieść tę wiedzę na interakcje w życiu codziennym. Nauczę Cię też odpowiednio pracować smyczą i ustawieniami ciała, żeby Twój pies miał w Tobie oparcie, co dodatkowo wzmocni Waszą relację. Jeśli będzie trzeba, postaramy się też opanować Twoje negatywne odczucia i emocje np. strach przed wychodzeniem z psem.
        </p>

        <h2 className="text-2xl font-semibold mt-8">WAŻNE</h2>
        <p>
          Spacer socjalizacyjny nie jest terapią, ani treningiem posłuszeństwa. Jeśli Twój pies ma wiele zachowań niepożądanych lub wykazuje problemy behawioralne - napisz do mnie. Być może Twój pies i tak świetnie poradzi sobie na spacerze, a może jednak najpierw będzie potrzebna konsultacja. Nie wstydź się pytać.
        </p>
      </TrainingLayout>
    </>
  );
};

export default SpacerySocjalizacyjne;
