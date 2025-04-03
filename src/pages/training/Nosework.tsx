import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const Nosework = () => {
  return (
    <TrainingLayout
      title="Nosework"
      subtitle=""
      imageSrc="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      imageAlt="Dog doing nosework"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Zajęcia indywidualne</b></span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span> <b>Lokalizacja:</b><ul>Sala na Gwareckiej 8/3L we Wrocławiu lub w terenie (po wcześniejszym ustaleniu)</ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Dla kogo?</b>
                <ul>
                  Dla psów na poziomie początkującym i na poziomie klas 0 oraz 1 w wiodących organizacjach nosework w Polsce.
                </ul></span>
            </li>
            <SignupInfo showContactForm={false}/>
          </ul>
          <PriceTag>80 zł/45 min</PriceTag>
        </div>
      }
    >
      <h2 className="text-2xl font-semibold mt-8">CZYM JEST NOSEWORK?</h2>
      <p>Nosework jest sportem kynologicznym, zainspirowanym pracą psów w służbach np. przy detekcji materiałów wybuchowych lub narkotyków, poszukiwaniu ludzi czy udaremnianiu przemytów egzotycznych zwierząt.</p>
      <p>Nosework opiera się na naturalnej psiej zdolności i potrzebie - węszeniu. Jest aktywnością, w której pies musi wyszukać i oznaczyć wyuczone wcześniej zapachy. W Polsce przyjęły się: cynamon, goździki i skórka pomarańczy.
        wcześniej zapachy. W Polsce przyjęły się: cynamon, goździki i skórka pomarańczy.</p>

      <h2 className="text-2xl font-semibold mt-8">NOSEWORK DLA KAŻDEGO PSA (I OPIEKUNA)?</h2>
      <p>Tak! Nosework jest świetnym sportem, bo mogą go uprawiać psy w każdym wieku, każdej wielkości i rasy. Nie wymaga specjalnej sprawności fizycznej, można go ćwiczyć w domach i na spacerach.

        Dodatkowo, dobrze stawiane w noseworku wyzwania, świetnie zwiększają pewność siebie u psa, męczą psią głowę i pomagają w kontroli emocji i samoregulacji. Nie zapominajmy, że węszenie jest dla psów samo w sobie przyjemne i daje psom dużo satysfakcji.</p>
    </TrainingLayout>
  );
};

export default Nosework;
