
import TrainingLayout from "@/components/training/TrainingLayout";

const KonsultacjeBehawioralne = () => {
  return (
    <TrainingLayout
      title="Konsultacje Behawioralne"
      subtitle="Specjalistyczne konsultacje pomagające zrozumieć i rozwiązać problemy behawioralne Twojego psa."
      imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc"
      imageAlt="Konsultacja behawioralna z psem"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Informacje o konsultacjach</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sesje 90-120 minutowe</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Szczegółowy wywiad behawioralny</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Pisemny plan działania</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Wsparcie po konsultacji</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Od 249 zł</p>
        </div>
      }
    >
      <p>
        Nasze konsultacje behawioralne są prowadzone przez specjalistów z wieloletnim
        doświadczeniem w rozwiązywaniu problemów behawioralnych psów. Pomagamy
        zrozumieć przyczyny trudnych zachowań i opracować skuteczny plan naprawczy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Kiedy potrzebna jest konsultacja behawioralna</h2>
      <p>
        Konsultacja behawioralna może być pomocna w przypadku wielu trudnych zachowań, takich jak:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Agresja wobec ludzi lub innych psów</li>
        <li>Lęki i fobie (burze, hałasy, separacja)</li>
        <li>Nadmierna reaktywność na bodźce</li>
        <li>Kompulsywne zachowania (gonienie ogona, lizanie łap)</li>
        <li>Problemy z zostawaniem samemu w domu</li>
        <li>Zniszczenia i nieodpowiednie zachowania w domu</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Przebieg konsultacji</h2>
      <p>
        Każda konsultacja behawioralna składa się z kilku etapów:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Szczegółowy wywiad:</strong> Zbieramy informacje o historii psa, jego środowisku, nawykach i zachowaniach</li>
        <li><strong>Obserwacja:</strong> Obserwujemy interakcje psa z otoczeniem, identyfikujemy wyzwalacze problemowych zachowań</li>
        <li><strong>Analiza:</strong> Określamy przyczyny leżące u podstaw zachowania i czynniki wpływające na problem</li>
        <li><strong>Plan działania:</strong> Opracowujemy indywidualny, szczegółowy plan modyfikacji zachowania</li>
        <li><strong>Demonstracja:</strong> Pokazujemy techniki i ćwiczenia, które należy wykonywać</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Po konsultacji</h2>
      <p>
        Po konsultacji otrzymasz:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pisemny raport z podsumowaniem konsultacji</li>
        <li>Szczegółowy plan działania z konkretnymi krokami</li>
        <li>Materiały edukacyjne dotyczące zachowań psów</li>
        <li>Dostęp do wsparcia e-mailowego przez okres 4 tygodni</li>
        <li>Możliwość umówienia sesji follow-up (dodatkowa opłata)</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Nasze podejście</h2>
      <p>
        Pracujemy w oparciu o naukowe podejście do behawioryzmu psów, wykorzystując pozytywne metody modyfikacji zachowań. Unikamy kar i awersyjnych technik, koncentrując się na zrozumieniu potrzeb psa i nauczeniu go alternatywnych, pożądanych zachowań.
      </p>
    </TrainingLayout>
  );
};

export default KonsultacjeBehawioralne;
