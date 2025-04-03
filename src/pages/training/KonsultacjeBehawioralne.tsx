
import TrainingLayout from "@/components/training/TrainingLayout";

const KonsultacjeBehawioralne = () => {
  return (
    <TrainingLayout
      title="Konsultacje Behawioralne"
      subtitle=""
      imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc"
      imageAlt="Konsultacja behawioralna z psem"
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
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <ul>
        <h3 className="text-2xl font-semibold">JAK SIĘ ZAPISAĆ?</h3>
        </ul>
          </li>
          <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span> Poprzez wiadomość prywatną na Facebooku(hiperłącze),</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span> Poprzez wiadomość prywatną na Instagramie(hiperłącze),</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>  Smsem +48 504 267 825.</span>
            </li>
        </ul>
        <p className="font-semibold text-primary">200 zł + dojazd/90 min</p>
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
  );
};

export default KonsultacjeBehawioralne;
