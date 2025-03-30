
import TrainingLayout from "@/components/training/TrainingLayout";

const TreningiIndywidualne = () => {
  return (
    <TrainingLayout
      title="Indywidualne Treningi"
      subtitle="Spersonalizowane sesje szkoleniowe dostosowane do konkretnych potrzeb Twojego psa."
      imageSrc="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01"
      imageAlt="Trening indywidualny z psem"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Szczegóły treningów</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sesje 60-minutowe</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Trening 1-na-1 z doświadczonym trenerem</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Elastyczne terminy i lokalizacje</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Plan treningowy dopasowany do potrzeb</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Od 199 zł</p>
        </div>
      }
    >
      <p>
        Nasze indywidualne treningi oferują spersonalizowane podejście do szkolenia
        psów, koncentrując się na specyficznych potrzebach i celach Twojego psa.
        Pracujemy jeden na jeden, aby zapewnić maksymalną uwagę i efektywność.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Korzyści z treningów indywidualnych</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pełna uwaga trenera skoncentrowana na Twoim psie</li>
        <li>Tempo dostosowane do możliwości psa</li>
        <li>Skupienie na konkretnych problemach lub umiejętnościach</li>
        <li>Możliwość treningu w domu lub w środowisku, gdzie występują problemy</li>
        <li>Elastyczne planowanie sesji</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Obszary szkolenia</h2>
      <p>
        Możemy skupić się na różnych aspektach szkolenia, w zależności od Twoich potrzeb:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Podstawowe posłuszeństwo:</strong> Komendy takie jak siad, waruj, zostań, przywołanie</li>
        <li><strong>Problemy behawioralne:</strong> Lęki, reaktywność, nadmierne szczekanie</li>
        <li><strong>Umiejętności specjalistyczne:</strong> Tricki, przygotowanie do zawodów</li>
        <li><strong>Socjalizacja:</strong> Kontrolowane interakcje z innymi psami lub ludźmi</li>
        <li><strong>Chodzenie na smyczy:</strong> Eliminacja ciągnięcia i reaktywności podczas spacerów</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Proces treningowy</h2>
      <p>
        Nasz proces treningowy obejmuje:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Konsultacja wstępna:</strong> Określenie celów i problemów do rozwiązania</li>
        <li><strong>Plan treningowy:</strong> Opracowanie spersonalizowanego planu</li>
        <li><strong>Sesje treningowe:</strong> Regularne sesje z trenerem</li>
        <li><strong>Zadania domowe:</strong> Ćwiczenia do wykonywania między sesjami</li>
        <li><strong>Ocena postępów:</strong> Regularna weryfikacja i dostosowanie planu</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Nasze podejście</h2>
      <p>
        Stosujemy pozytywne metody szkoleniowe oparte na nauce i zrozumieniu psiej psychologii. Nasi trenerzy są przeszkoleni w najnowszych technikach szkoleniowych i stale podnoszą swoje kwalifikacje.
      </p>
    </TrainingLayout>
  );
};

export default TreningiIndywidualne;
