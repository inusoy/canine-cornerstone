import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const KonsultacjeBehawioralne = () => {
  return (
    <>
      <Helmet>
        <title>Konsultacje Behawioralne dla psów | Szczek Szczek Wrocław</title>
        <meta 
          name="description" 
          content="Profesjonalne konsultacje behawioralne dla psów - spacerowe oraz szczeniaczkowe. Pomoc w rozwiązywaniu problemów z zachowaniem psa i budowaniu relacji." 
        />
        <link rel="canonical" href="/training/konsultacje-behawioralne" />
        <meta property="og:title" content="Konsultacje Behawioralne dla psów | Szczek Szczek Wrocław" />
        <meta 
          property="og:description" 
          content="Konsultacje dla psów z problemami spacerowymi oraz dla świeżo upieczonych opiekunów szczeniąt. Pomoc behawiorystki w rozwiązywaniu problemów." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/konsultacje-behawioralne" />
      </Helmet>
      <TrainingLayout
        title="Konsultacje Behawioralne"
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
                <span> <b>Lokalizacja:</b><ul>Umówione wcześniej miejsce lub Wasz dom.</ul>
                </span>
              </li>
              <SignupInfo showContactForm={false} price="200 zł + dojazd/90 min"/>
            </ul>
          </div>
        }
      >
        <p>
          ZE WZGLĘDU NA BRAK CZASU, NA TEN MOMENT PROWADZĘ JEDYNIE DWA RODZAJE KONSULTACJI BEHAWIORALNYCH.
        </p>

        <h2 className="text-2xl font-semibold mt-8">KONSULTACJE SPACEROWE</h2>
        <p>
          Konsultacje spacerowe są odpowiednie dla psów, które mają problemy spacerowe np. reagują na różne sytuacje zbyt emocjonalnie, są agresywne w stosunku do innych psów, ciągną lub chcą wejść w interakcję ze wszystkimi psami. Tego typu konsultacje mogą być też dobrą opcją dla opiekunów, którzy chcą się nauczyć pracować ciałem i smyczą, lepiej zrozumieć mowę ciała psów lub chcą upewnić, że robią na spacerach wszystko jak należy.
        </p>
        <p>Konsultacje odbywają się we wcześniej ustalonym miejscu i trwają 90 minut.</p>

        <h2 className="text-2xl font-semibold mt-8">KONSULTACJE SZCZENIACZKOWE</h2>
        <p>
          Ten typ konsultacji będzie dobry dla świeżo upieczonych opiekunów szczeniaczka. Opowiem na nich m.in. jak prawidłowo socjalizować psa, jak nauczyć czystości, jak dobrze budować relację, jak zaspokajać psie potrzeby i jak dbać o szczeniaczkowe emocje. Oprócz tego odpowiem na nurtujące Was pytania i pomogę sprawić, żeby życie ze szczeniaczkiem, mimo trudów, było niezapomnianą przygodą.
        </p>
        <p>Konsultacje odbywają się u Was w domu i trwają 90 minut.</p>
      </TrainingLayout>
    </>
  );
};

export default KonsultacjeBehawioralne;
