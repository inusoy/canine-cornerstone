
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-primary font-bryndan uppercase">
            O mnie
          </h2>
          <div className="fade-in">
            <img
              src="public/images/_DSC7003.jpg"
              alt="Trainer with dogs"
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-lg text-muted-foreground fade-in">
            Nazywam się Marta Stach. Jestem certyfikowaną trenerką i behawiorystką psów, ale też psycholożką! Od zawsze fascynowały mnie psychika oraz zachowania ludzi i zwierząt. Dlatego już w podstawówce wyznaczyłam sobie cel zostania psychologiem i wspierania ludzi. Zwierzęta były obecne w moim życiu odkąd pamiętam, próbowałam wymyślić sposób na ich obecność w zawodzie psychologa, ale stale mi się to nie spinało.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Aż w 2022 roku w moim życiu pojawił się labrador retriever - Heban. Był tym czego nieświadomie szukałam przez całe moje życie. Z Hebana zrodziła się pasja do psów i szkolenia. Za to z mojej ukochanej psychologii wyodrębnił się człon PSY.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Stwierdziłam, że wywrócę moje życie do góry nogami i będę pracować z psami oraz ich ludźmi. Dlatego stworzyłam <b>SZCZEK SZCZEK</b>, szkołę dla psów i ich ludzi. Przestrzeń, w której każdy znajdzie coś dla siebie. Prowadzę różne indywidualne i grupowe zajęcia z zakresu posłuszeństwa, psie przedszkola, spacery socjalizacyjne i nosework. Dodatkowo, można się do mnie zapisać na konsultacje behawioralne.
          </p>
          <p className="text-lg text-muted-foreground fade-in">
            Moim szczególnym zainteresowaniem jest psia komunikacja, zwłaszcza na linii pies-pies. W swojej pracy opieram się na metodach opartych na zrozumieniu psa z poszanowaniem jego emocji. Zależy mi na rozwiązaniu problemu, a nie zaleczeniu objawów. Pies i jego opiekun są teamem, dlatego szczególny nacisk kładę na relację i zrozumienie, nie tylko psa, ale i opiekuna. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
