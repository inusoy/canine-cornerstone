
import TrainingLayout from "@/components/training/TrainingLayout";

const SalaZabaw = () => {
  return (
    <TrainingLayout
      title="Sala Zabaw i Eksploracji"
      subtitle="Bezpieczna przestrzeń, gdzie Twój pies może bawić się, eksplorować i uczyć się pod nadzorem specjalistów."
      imageSrc="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4"
      imageAlt="Psy w sali zabaw"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Informacje o sali</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sesje 60-minutowe</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maksymalnie 3 psy na sesję</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Różnorodne wyposażenie i przeszkody</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Profesjonalny nadzór</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Od 99 zł</p>
        </div>
      }
    >
      <p>
        Nasza Sala Zabaw i Eksploracji to specjalnie zaprojektowana przestrzeń,
        gdzie psy mogą bezpiecznie bawić się, odkrywać nowe bodźce i rozwijać
        umiejętności społeczne pod okiem doświadczonych trenerów.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Korzyści</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Bezpieczne środowisko do zabawy i eksploracji</li>
        <li>Stymulacja mentalna i fizyczna</li>
        <li>Rozwój umiejętności społecznych</li>
        <li>Budowanie pewności siebie</li>
        <li>Możliwość poznania innych psów</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Wyposażenie sali</h2>
      <p>
        Nasza sala wyposażona jest w różnorodne elementy zapewniające kompleksową stymulację dla psów:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Przeszkody agility (tunele, slalomy, mostki)</li>
        <li>Platformy i podesty o różnych wysokościach</li>
        <li>Różnorodne faktury podłoża</li>
        <li>Interaktywne zabawki i węchowe wyzwania</li>
        <li>Elementy do ćwiczeń równowagi i koordynacji</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Rodzaje sesji</h2>
      <p>
        Oferujemy różne rodzaje sesji w naszej sali zabaw:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Sesja indywidualna:</strong> Tylko Twój pies w całej sali</li>
        <li><strong>Sesja dobrana:</strong> Twój pies i 1-2 kompatybilne psy</li>
        <li><strong>Sesja eksploracyjna:</strong> Nacisk na odkrywanie nowych bodźców</li>
        <li><strong>Sesja zręcznościowa:</strong> Elementy agility i ćwiczeń zwinności</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Wymagania</h2>
      <p>
        Aby zapewnić bezpieczne i pozytywne doświadczenie, wymagamy:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Aktualnych szczepień</li>
        <li>Wstępnej oceny temperamentu psa</li>
        <li>Braku agresji wobec ludzi i innych psów</li>
        <li>Podstawowego posłuszeństwa (reagowanie na imię, przywołanie)</li>
      </ul>
    </TrainingLayout>
  );
};

export default SalaZabaw;
