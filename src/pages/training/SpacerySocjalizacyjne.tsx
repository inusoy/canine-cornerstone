
import TrainingLayout from "@/components/training/TrainingLayout";

const SpacerySocjalizacyjne = () => {
  return (
    <TrainingLayout
      title="Spacery Socjalizacyjne"
      subtitle="Ustrukturyzowane spacery grupowe pomagające psu rozwijać umiejętności społeczne i pewność siebie."
      imageSrc="https://images.unsplash.com/photo-1487252665478-49b61b47f302"
      imageAlt="Psy na spacerze socjalizacyjnym"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Informacje o spacerach</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>4-tygodniowy harmonogram</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maksymalnie 4 psy w grupie</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Różne lokalizacje każdego tygodnia</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Odpowiednie dla psów od 6 miesięcy</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Od 149 zł</p>
        </div>
      }
    >
      <p>
        Nasze spacery socjalizacyjne zapewniają kontrolowane środowisko, w którym psy
        mogą wchodzić w interakcje z innymi, jednocześnie ucząc się odpowiednich
        manier podczas spacerów i etykiety społecznej.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Cechy spacerów</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Profesjonalny nadzór</li>
        <li>Małe grupy dla bezpieczeństwa</li>
        <li>Różnorodne środowiska</li>
        <li>Monitorowanie zachowania</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Dlaczego spacery grupowe są ważne</h2>
      <p>
        Spacery socjalizacyjne oferują korzyści, których nie zapewnią indywidualne spacery:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Nauka odpowiedniego powitania z innymi psami</li>
        <li>Ćwiczenie skupienia przy rozpraszaczach</li>
        <li>Budowanie pewności siebie w różnych środowiskach</li>
        <li>Poprawa manier na smyczy w realnych sytuacjach</li>
        <li>Monitorowana socjalizacja z profesjonalnym przewodnictwem</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Lokalizacje spacerów</h2>
      <p>
        Każdego tygodnia odwiedzamy inne środowisko, aby zapewnić różnorodne doświadczenia:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Tydzień 1:</strong> Spacer po parku miejskim z umiarkowanymi rozpraszaczami</li>
        <li><strong>Tydzień 2:</strong> Szlak przyrodniczy z naturalnymi przeszkodami</li>
        <li><strong>Tydzień 3:</strong> Środowisko miejskie z ruchem ulicznym i pieszymi</li>
        <li><strong>Tydzień 4:</strong> Mieszane środowisko z różnymi wyzwaniami</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Wymagania</h2>
      <p>
        Aby uczestniczyć w naszych spacerach socjalizacyjnych, wymagamy:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Aktualnych szczepień</li>
        <li>Podstawowych umiejętności chodzenia na smyczy</li>
        <li>Braku agresywnego zachowania wobec ludzi</li>
        <li>Odpowiednio dopasowanych szelek lub obroży</li>
        <li>Standardowej smyczy 2-metrowej (bez smyczy automatycznych)</li>
      </ul>
    </TrainingLayout>
  );
};

export default SpacerySocjalizacyjne;
