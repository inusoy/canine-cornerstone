
import TrainingLayout from "@/components/training/TrainingLayout";

const PsiePrzedszkole = () => {
  return (
    <TrainingLayout
      title="Psie Przedszkole"
      subtitle="Zapewnij swojemu szczeniakowi najlepszy start w życie dzięki wczesnej socjalizacji i szkoleniu."
      imageSrc="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      imageAlt="Szczenięta podczas szkolenia"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Informacje o programie</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>6-tygodniowy program dla szczeniąt</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Dla szczeniąt w wieku 8-20 tygodni</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maksymalnie 6 szczeniąt w grupie</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Czas na zabawę i socjalizację</span>
            </li>
          </ul>
          <div className="p-3 bg-muted rounded-md">
            <p className="font-semibold text-primary mb-1">Oferta specjalna:</p>
            <p className="text-sm">15% zniżki przy zapisie przed 1 maja 2024</p>
          </div>
          <p className="font-semibold text-primary">Od 249 zł</p>
        </div>
      }
    >
      <p>
        Nasz program Psiego Przedszkola jest zaprojektowany, aby pomóc młodym psom
        rozwijać kluczowe umiejętności społeczne i podstawowe posłuszeństwo
        w bezpiecznym, kontrolowanym środowisku.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Korzyści z programu</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Wczesna socjalizacja</li>
        <li>Podstawowe maniery i komendy</li>
        <li>Nauka zahamowania siły gryzienia</li>
        <li>Budowanie pewności siebie</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Kluczowy okres rozwoju</h2>
      <p>
        Pierwsze kilka miesięcy życia szczenięcia to krytyczny okres socjalizacji. W tym czasie szczenięta są najbardziej otwarte na nowe doświadczenia i naukę. Nasze Psie Przedszkole wykorzystuje ten etap rozwoju, aby:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Zapoznać szczenięta z różnymi widokami, dźwiękami i fakturami w pozytywny sposób</li>
        <li>Wprowadzić kontrolowany kontakt z innymi szczeniętami i ludźmi</li>
        <li>Rozpocząć podstawowe szkolenie, które będzie kontynuowane przez całe życie psa</li>
        <li>Zapobiegać problemom behawioralnym zanim się pojawią</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Program zajęć</h2>
      <p>
        Każdy tydzień koncentruje się na innym aspekcie rozwoju szczenięcia:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Tydzień 1:</strong> Wprowadzenie i podstawowe ćwiczenia koncentracji</li>
        <li><strong>Tydzień 2:</strong> Akceptacja dotyku i pielęgnacji</li>
        <li><strong>Tydzień 3:</strong> Podstawowe komendy: siad, waruj i przywołanie</li>
        <li><strong>Tydzień 4:</strong> Podstawy chodzenia na smyczy</li>
        <li><strong>Tydzień 5:</strong> Zapobieganie problemom (skakanie, gryzienie)</li>
        <li><strong>Tydzień 6:</strong> Wyzwania środowiskowe i budowanie pewności siebie</li>
      </ul>
    </TrainingLayout>
  );
};

export default PsiePrzedszkole;
