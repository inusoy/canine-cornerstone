import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";

const PsiaAkademia = () => {
  return (
    <>
      <Helmet>
        <title>Psia Akademia - Zaawansowane szkolenia dla psów | Szczek Szczek</title>
        <meta
          name="description"
          content="Zajęcia dla psów znających podstawy posłuszeństwa. Doskonalenie umiejętności, praca w rozproszeniach i nowe komendy. Wrocław."
        />
        <link rel="canonical" href="/training/psia-akademia" />
        <meta property="og:title" content="Psia Akademia - Zaawansowane szkolenia dla psów | Szczek Szczek" />
        <meta
          property="og:description"
          content="Zajęcia dla psów znających podstawy posłuszeństwa. Doskonalenie umiejętności, praca w rozproszeniach i nowe komendy. Wrocław."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/training/psia-akademia" />
      </Helmet>
      <TrainingLayout
        title="Psia Akademia"
        sidebarContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Zajęcia grupowe (3 - 5 psów)</b></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Lokalizacja:</b><ul>Plac treningowy na Mącznej 6b we Wrocławiu</ul></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Dla kogo?</b>
                  <ul>Dla psów znających podstawy posłuszeństwa</ul></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Ile spotkań?</b><ul>5 spotkań po 45-60 minut</ul></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><b>Kiedy?</b><ul>Grupy w weekendy i w tygodniu.</ul></span>
              </li>
            </ul>
            <SignupInfo 
              showContactForm={false}
              price="520 zł/pakiet lub 480 zł dla absolwentów szkoleń w Szczek Szczek"
            />
            <div className="mt-4">
              <p className="font-medium mt-2">Najbliższe grupy:</p>
              <ul className="space-y-1 mt-1">
                <li>
                  <span className="text-primary mr-2">•</span>
                   Soboty: <b>07.02</b>, 14.02, 21.02, 14.03, 21 lub niedziela 22.03 o 13:00
                </li>
                <li>
                  <span className="text-primary mr-2">•</span>
                   Czwartki: <b>12.02</b>, 19.02, 26.02, 05.03, 12.03 o 18:00
                </li>
              </ul>
            </div>
          </div>
        }
      >
        <p>
          Znacie już podstawy posłuszeństwa, ale nie chcecie osiąść na laurach? Psia Akademia jest dla Was!
        </p>

        <h2 className="text-2xl font-semibold mt-8">CZEGO UCZY PSIA AKADEMIA W SZCZEK SZCZEK?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Praktycznego posłuszeństwa w rozproszeniach.</li>
          <li>Jeszcze lepszego skupienia na przewodniku.</li>
          <li>Doskonali chodzenie przy nodze, przywołanie i rezygnację ze znalezionego jedzenia.</li>
          <li>Nowych sygnałów nagrody.</li>
          <li>Pracy na odłożonej nagrodzie.</li>
          <li>Nowych haseł m.in. targetowania ręki i zatrzymania w ruchu.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">CO OTRZYMACIE?</h2>
        <p>
          Każdy uczestnik otrzyma dostęp do wykładu o treningu i motywacji, a po ukończeniu kursu - dyplom ukończenia szkolenia.
        </p>

        <h2 className="text-2xl font-semibold mt-8">CO MUSI UMIEĆ TWÓJ PIES?</h2>
        <p className="mb-4">
          Psia Akademia jest skierowana do teamów, które ukończyły i dokładnie przerobiły materiał z psiego przedszkola lub psiej szkółki w Szczek Szczek lub dla psów, które znają już podstawy posłuszeństwa.
        </p>
        <p className="mb-2">Co musi umieć Twój pies?</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>siad z zostaniem w pozycji,</li>
          <li>zostań,</li>
          <li>na miejsce (mile widziane),</li>
          <li>zostaw,</li>
          <li>poczekaj - proszę - samokontrola przy jedzeniu i nie tylko,</li>
          <li>do mnie,</li>
          <li>noga - pies musi być w stanie iść przy nodze, może być nagradzany, ale nie powinien być ciągnięty za nos smaczkiem.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">WAŻNE</h2>
        <p>
          Psia Akademia nie służy do rozwiązywania problemów behawioralnych, więc jeśli obawiasz się, że Twój pies sobie nie poradzi lub ma problemy behawioralne - skontaktuj się ze mną. Zobaczymy, co możemy z tym zrobić.
        </p>
      </TrainingLayout>
    </>
  );
};

export default PsiaAkademia;
