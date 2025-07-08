import { Helmet } from "react-helmet-async";
import TrainingLayout from "@/components/training/TrainingLayout";
import SignupInfo from "@/components/training/SignupInfo";

const LekOut = () => {
    return (
        <>
            <Helmet>
                <title>LękOut - Zajęcia dla psów lękowych | Szczek Szczek Wrocław</title>
                <meta
                    name="description"
                    content="Kurs LękOut dla psów wrażliwych, niepewnych i lękowych we Wrocławiu. Zajęcia obejmują integrację sensoryczną, budowanie pewności siebie i pracę z emocjami."
                />
                <link rel="canonical" href="/training/lekout" />
                <meta property="og:title" content="LękOut - Zajęcia dla psów lękowych | Szczek Szczek Wrocław" />
                <meta
                    property="og:description"
                    content="Masz w domu lękuska? Chcesz wzmocnić Waszą relację i pomóc psu radzić sobie ze stresem? Zajęcia LękOut są stworzone dla Was."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/training/lekout" />
            </Helmet>
            <TrainingLayout
                title="LękOut"
                sidebarContent={
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">WAŻNE INFORMACJE</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span><b>Forma:</b> 5 spotkań indywidualnych</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span><b>Kiedy?</b> Terminy ustalane indywidualnie z prowadzącą</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span><b>Lokalizacja: </b>
                                    <a
                                        href="https://maps.app.goo.gl/3g3nE4Pzb49iM8k8A"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Sala na Gwareckiej 8/3L we Wrocławiu.
                                    </a>
                                </span>
                            </li>
                            <SignupInfo showContactForm={false}
                                price="600 zł"
                                priceAsterisk="*Cena za cały kurs (5 spotkań)." />
                        </ul>
                    </div>
                }
            >
                <p>
                    Twój pies boi się hałasów, nowych rzeczy, zamkniętych pomieszczeń lub
                    różnych struktur? A może brakuje mu pewności siebie? Reaguje stresem,
                    wycofaniem, nadmierną czujnością, niepewnością, co przeszkadza mu w
                    codziennym funkcjonowaniu? Masz w domu lękuska i chcesz wzmocnić Waszą
                    relację?
                </p>
                <p>
                    Zajęcia LękOut są stworzone właśnie dla Was. Razem z Weroniką Samstyko,
                    behawiorystką i zoopsycholożką mającą doświadczenie w pracy z psami
                    schroniskowymi i lękuskani, stworzyłyśmy kurs z myślą o psach
                    wrażliwych, niepewnych i lękowych.
                </p>

                <h2 className="text-2xl font-semibold mt-8">CO OBEJMUJE KURS?</h2>
                <p>Na LękOut składa się 5 spotkań, które będą obejmować:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <b>Elementy integracji sensorycznej</b> - pomaga psu lepiej przetwarzać
                        bodźce z otoczenia, redukując nadwrażliwość i niepokój.
                    </li>
                    <li>
                        <b>Budowanie pewności siebie</b> - wzmocni w psie przekonanie, że potrafi
                        poradzić sobie w trudnych sytuacjach, mimo niepewnych sytuacji.
                    </li>
                    <li>
                        <b>Odwrażliwianie psa na dźwięki</b> - pomoże mu zachować spokój w
                        codziennych sytuacjach.
                    </li>
                    <li>
                        <b>Ćwiczenia budujące więź z opiekunem</b> - silna relacja pomaga psu lepiej
                        radzić sobie w stresujących sytuacjach, a przy tym zwiększa motywację
                        na wspólną pracę.
                    </li>
                    <li>
                        <b>Elementy zabawy węchowej</b> - węszenie działa relaksująco i buduje
                        pewność siebie przez sukcesy w pracy nosem.
                    </li>
                    <li>
                        I wieeeeele innych ćwiczeń dostosowanych do psa i jego stopnia lęku!
                    </li>
                </ul>

                <p className="font-bold uppercase text-center mt-6">
                    Każde zajęcia będą dostosowane konkretnie pod Was i Wasze potrzeby.
                </p>

                <p>
                    Zajęcia będą prowadzone indywidualnie, a czas trwania zajęć będzie
                    zależny od Twojego psa (maksymalnie 60 minut). Praca będzie przebiegać w
                    spokojnym tempie, bez presji na osiągnięcia, w lokalu dostosowanym pod
                    Twojego psiaka. Dodatkowo, otrzymacie dostęp do materiałów edukacyjnych.
                </p>

                <p className="font-bold uppercase text-center text-primary mt-6">
                    Zainteresowana? Nie czekaj, bo ilość psów, które możemy przyjąć jest
                    ograniczona!
                </p>

                <p className="mt-6 text-sm">
                    <i>
                        LękOut nie jest terapią behawioralną, ale może wesprzeć Ciebie i Twojego
                        psa w procesie terapeutycznym. Jednocześnie, może też być osobnym
                        zajęciem, które pomoże otworzyć Twojego psa.
                    </i>
                </p>
            </TrainingLayout>
        </>
    );
};

export default LekOut;