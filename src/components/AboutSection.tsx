const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mobile-text-justify">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-primary font-bryndan uppercase">
            O mnie
          </h2>
          <div className="fade-in">
            <img
              src="/images/_DSC7003.jpg"
              alt="Marta Stach - certyfikowana trenerka i behawiorystka psów"
              className="w-full h-full object-cover rounded-lg mb-4"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <p className="text-lg text-muted-foreground fade-in">
            Nazywam się Marta Stach. Jestem certyfikowaną trenerką, behawiorystką psów, instruktorką noseworku i ludzką psycholożką!
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Od zawsze fascynowały mnie psychika oraz zachowania ludzi i zwierząt. Dlatego już w podstawówce wyznaczyłam sobie cel zostania psychologiem i wspierania ludzi. Zwierzęta były obecne w moim życiu odkąd pamiętam, próbowałam wymyślić sposób na ich obecność w zawodzie psychologa.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Aż w 2022 roku w moim życiu pojawił się labrador retriever - Heban. Był tym czego nieświadomie szukałam przez całe moje życie. Z Hebana zrodziła się pasja do psów.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Stwierdziłam, że wywrócę moje życie do góry nogami i będę pracować z psami oraz ich ludźmi. Dlatego stworzyłam <b>SZCZEK SZCZEK</b>, szkołę dla psów i ich ludzi. Przestrzeń, w której każdy znajdzie coś dla siebie. Prowadzę różne indywidualne i grupowe zajęcia z zakresu posłuszeństwa, psie przedszkola, spacery socjalizacyjne i nosework. Dodatkowo, można się do mnie zapisać na konsultacje behawioralne.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Moim szczególnym zainteresowaniem jest psia komunikacja, zwłaszcza na linii pies-pies. Jestem zdania, że kontakty wewnątrzgatunkowe (czyli z innymi psami)  są jednym z najważniejszych filarów budujących stabilnego, gotowego na wyzwania życia psa.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            W swojej pracy opieram się na metodach opartych na zrozumieniu psa i jasnej dla obu stron komunikacji. Jednocześnie, duży nacisk kładę na to, że pies jest psem, czyli ma swoje PSIE potrzeby i zachowania. Nie znajdziecie u mnie odwracania uwagi smaczkami, wrzucania psa w trening w każdej trudniejszej sytuacji, a zamiast tego postawimy na współpracę, komunikację i granice. Szukam balansu, nie używając przy tym przemocy.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Zależy mi na rozwiązaniu problemu, a nie zaleczeniu objawów. Staram się być konkretna, ale przy tym otwarta na Wasze historie i emocje. Pies i jego opiekun są teamem, który nieustannie na siebie oddziaływuje, dlatego nie da się rozdzielić emocji opiekuna od emocji psa i emocji psa od emocji opiekuna.
          </p>
          <div className="fade-in">
            <img
              src="/images/Marta.jpg"
              alt="Marta Stach - certyfikowana trenerka i behawiorystka psów"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              width="600"
              height="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
