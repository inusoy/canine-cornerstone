
import TrainingLayout from "@/components/training/TrainingLayout";

const Nosework = () => {
  return (
    <TrainingLayout
      title="Nosework"
      subtitle="Nosework jest sportem kynologicznym, zainspirowanym pracą psów w służbach np. przy detekcji materiałów wybuchowych lub narkotyków, poszukiwaniu ludzi czy udaremnianiu przemytów egzotycznych zwierząt."
      imageSrc="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      imageAlt="Dog doing nosework"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Nosework Training</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Small group sessions (max 4 dogs)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>6-week program</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>All materials provided</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Certificate upon completion</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Starting from 399 PLN</p>
        </div>
      }
    >
      <p>
        Nosework opiera się na naturalnej psiej zdolności i potrzebie - węszeniu. Jest aktywnością, w której pies musi wyszukać i oznaczyć wyuczone wcześniej zapachy. W Polsce przyjęły się: cynamon, goździki i skórka pomarańczy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Nosework w <b>Szczek Szczek</b> dla kogo?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>dla psów, które nigdy nie miały styczności z noseworkiem,</li>
        <li>dla psów na poziomie początkującym,</li>
        <li>dla psów na poziomie klasy 0 i 1 w wiodących organizacjach nosework w Polsce.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Benefits of Nosework</h2>
      <p>
        Nosework to aktywność, która ma wiele zalet:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Mentalne zmęczenie psa - 15 minut węszenia może zmęczyć psa tak, jak godzinny spacer</li>
        <li>Budowanie pewności siebie u psa</li>
        <li>Doskonała aktywność dla psów starszych, po kontuzjach lub nieśmiałych</li>
        <li>Wzmacnianie więzi między psem a przewodnikiem</li>
        <li>Nauka koncentracji i skupienia na zadaniu</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Our Approach</h2>
      <p>
        Nasze zajęcia z nosework prowadzone są metodami pozytywnymi, z naciskiem na budowanie motywacji psa do pracy. Zaczynamy od podstaw, ucząc psa szukania jedzenia, przez zabawki, aż po zapachy. Każdy pies pracuje we własnym tempie.
      </p>
    </TrainingLayout>
  );
};

export default Nosework;
