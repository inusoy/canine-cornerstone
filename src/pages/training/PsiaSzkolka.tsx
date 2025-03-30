
import TrainingLayout from "@/components/training/TrainingLayout";

const PsiaSzkolka = () => {
  return (
    <TrainingLayout
      title="Psia Szkółka"
      subtitle="Kompleksowe programy szkoleniowe dla psów w każdym wieku i na każdym poziomie umiejętności."
      imageSrc="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
      imageAlt="Szkolenie w Psiej Szkółce"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Szczegóły programu</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>8-tygodniowy program</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maksymalnie 6 psów w grupie</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Raporty z postępów i oceny</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Materiały szkoleniowe w pakiecie</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Od 349 zł</p>
        </div>
      }
    >
      <p>
        Nasza Psia Szkółka zapewnia ustrukturyzowane środowisko nauki, w którym
        psy mogą rozwijać niezbędne umiejętności, jednocześnie dobrze się bawiąc
        i socjalizując z innymi.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Cechy programu</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Małe grupy szkoleniowe</li>
        <li>Indywidualne podejście</li>
        <li>Stopniowy rozwój umiejętności</li>
        <li>Ćwiczenia w realnych sytuacjach</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Program szkolenia</h2>
      <p>
        Nasz program Psiej Szkółki został zaprojektowany, aby zapewnić kompleksową edukację dla Twojego psa, obejmującą wszystkie aspekty zachowania i posłuszeństwa:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Tygodnie 1-3:</strong> Podstawowe komendy, praca nad skupieniem i umiejętności chodzenia na smyczy</li>
        <li><strong>Tygodnie 4-6:</strong> Średniozaawansowane komendy, trening z rozpraszaczami i socjalizacja</li>
        <li><strong>Tygodnie 7-8:</strong> Zaawansowane umiejętności, praca na dystans i zastosowanie w codziennym życiu</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Co zabrać</h2>
      <p>
        Aby zapewnić najlepsze doświadczenie w naszej Psiej Szkółce, prosimy o zabranie:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dobrze dopasowanej obroży lub szelek</li>
        <li>Smyczy o długości 2 metrów (bez smyczy automatycznych)</li>
        <li>Ulubionych przysmaków i zabawek psa</li>
        <li>Kliker treningowy (opcjonalnie)</li>
        <li>Woda i miska dla psa</li>
      </ul>
    </TrainingLayout>
  );
};

export default PsiaSzkolka;
