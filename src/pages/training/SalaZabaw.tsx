import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";
import PriceTag from "@/components/training/PriceTag";

const SalaZabaw = () => {
  return (
    <TrainingLayout
      title="Sala Zabaw i Eksploracji"
      subtitle=""
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
              <span> <b>Lokalizacja:</b><ul>Sala na Gwareckiej 8/3L we Wrocławiu</ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span><b>Dla kogo?</b>
                <ul>
                  Salka zabaw i eksploracji jest dla każdego psa, niezależnie od wieku, wielkości czy rasy. Szczególnie mile widziane są lękuski, dla których to miejsce będzie idealne do otworzenia się.
                </ul></span>
            </li>
            <SignupInfo showFacebook={false} showInstagram={false} showSMS={false} showContactForm={false} customLinks={[{ url: "https://forms.gle/zUhMB9hN1WJxXBPS6", text: "Rezerwacja lokalu" }]}/>
          </ul>
          <PriceTag>140 zł/90 min*</PriceTag> <p className="font-semibold text-primary">*czas może być krótszy, bo to Twój pies decyduje</p>
        </div>
      }
    >
      <h2 className="text-2xl font-semibold mt-8">CZYM JEST SALA ZABAW I EKSPLORACJI?</h2>
      <p>
        Sala zabaw i eksploracji to pierwsze takie miejsce dla psów na mapie Wrocławia. Odpowiednio przystosowana sala pozwoli Twojemu psu zaspokoić potrzeby węszenia, eksploracji i stymulacji umysłowej.</p>

      <p>Koncept sali opiera się na jak największej decyzyjności psów. Psy podczas pobytu na sali, motywowane poukrywanymi w najróżniejszych miejscach smaczkami, zwiedzają ją. Podczas zwiedzania, psy rozwiązują różnego rodzaju zagadki węchowe i  intelektualne, a przy tym pokonują różnego rodzaju przeszkody sensoryczne, ale i obcują z przedmiotami, które mogą wywoływać strach.</p>

      <p>Za każdym razem ustawienie salki może być inne, co zapewnia psom różnorodność i brak nudy. Najważniejsze jest to, że pies sam wybiera sposób w jaki przeszukuję salkę, dzięki czemu buduje pewność siebie i niezależność. Ostatecznie jednak jest to miejsce, w którym pies może się zrelaksować i być psem.</p>
      <p>Podczas całej aktywności jestem przy Was obecna, więc nie ma zmartwienia, że nie będziecie wiedzieć, co robić. Wizyta na salce trwa 90 min (w tym rozkładanie smaczków), ale tak naprawdę to pies zadecyduje ile będzie trwał jego czas na salce.</p>
    </TrainingLayout>
  );
};

export default SalaZabaw;
