import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Handle animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Handle scrolling to section if coming from another page
    if (location.state?.scrollTo && initialRender) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Small timeout to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setInitialRender(false);
        }, 100);
      }
    } else if (initialRender) {
      // If there's no specific section to scroll to, ensure we're at the top
      // Remove this scroll behavior as it may conflict with ScrollToTop
      setInitialRender(false);
    }
  }, [location.state, initialRender]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Szczek Szczek",
    "image": "https://www.szczekszczek.pl/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png",
    "description": "Szkoła dla psów oferująca profesjonalne szkolenia we Wrocławiu, m.in. nosework, spacery socjalizacyjne, konsultacje behawioralne.",
    "@id": "https://www.szczekszczek.pl",
    "url": "https://www.szczekszczek.pl",
    "telephone": "+48504267825",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gwarecka 8/3L",
      "addressLocality": "Wrocław",
      "postalCode": "54-611",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1267,
      "longitude": 17.0333
    },
    "availableService": [
      {
        "@type": "Service",
        "name": "Nosework",
        "description": "Nosework jest sportem kynologicznym opartym na naturalnej psiej zdolności węszenia. Pies musi wyszukać i oznaczyć specyficzne zapachy (cynamon, goździki, skórka pomarańczy). Zwiększa pewność siebie u psa, wspomaga kontrolę emocji i samoregulację, a przede wszystkim daje psom dużo satysfakcji."
      },
      {
        "@type": "Service",
        "name": "Psia Szkółka",
        "description": "Zajęcia z podstaw posłuszeństwa dla psów od 5. miesiąca życia. Nauczymy Twojego psa komend jak: siad, zostań, zostaw, na miejsce, noga, a także cierpliwości i samokontroli. Oferujemy zajęcia grupowe (2-3 psy) w profesjonalnej sali z certyfikowaną trenerką."
      },
      {
        "@type": "Service",
        "name": "Psie Przedszkole",
        "description": "Zajęcia dla szczeniaków od 2. do 5. miesiąca życia. Wspieramy prawidłowy start w psie życie poprzez odpowiednią socjalizację, habituację, budowanie relacji i podstawy posłuszeństwa. Oferujemy zajęcia grupowe lub indywidualne z materiałami szkoleniowymi i wsparciem."
      },
      {
        "@type": "Service",
        "name": "Spacery Socjalizacyjne",
        "description": "Najbezpieczniejsza forma poznawania psów ze sobą. W małych grupach (2-4 psy) dobieranych indywidualnie, uczymy psy prawidłowej komunikacji psiej. Psy uczą się radzić sobie z emocjami, a opiekunowie poznają tajniki psiej komunikacji i prawidłowej pracy ze smyczą."
      },
      {
        "@type": "Service",
        "name": "Sala Zabaw i Eksploracji",
        "description": "Pierwsze takie miejsce dla psów na mapie Wrocławia. Sala pozwala psu zaspokoić potrzeby węszenia i eksploracji w bezpiecznych warunkach. Psy rozwiązują zagadki węchowe i intelektualne, pokonują przeszkody sensoryczne i budują pewność siebie poprzez własną decyzyjność. Idealne dla każdego psa, szczególnie lękliwych."
      },
      {
        "@type": "Service",
        "name": "Treningi Indywidualne",
        "description": "Personalizowane treningi dla psów i opiekunów, którzy chcą nauczyć się posłuszeństwa, doszlifować komendy lub nauczyć psa sztuczek. Oferujemy naukę przywołania, komend statycznych, chodzenia przy nodze, oraz zaawansowanych sztuczek przez kształtowanie z klikerem. Treningi wzmacniają relację z psem."
      },
      {
        "@type": "Service",
        "name": "Konsultacje Behawioralne - Spacerowe",
        "description": "Dla psów z problemami spacerowymi: nadmierna reaktywność, agresja wobec innych psów, ciągnięcie na smyczy. Podczas 90-minutowej konsultacji nauczysz się prawidłowej pracy z ciałem i smyczą, zrozumiesz lepiej mowę ciała psów i zdobędziesz pewność w prowadzeniu swojego psa."
      },
      {
        "@type": "Service",
        "name": "Konsultacje Behawioralne - Szczeniaczkowe",
        "description": "Dla świeżo upieczonych opiekunów szczeniąt. Podczas 90-minutowej konsultacji w Twoim domu, otrzymasz wiedzę o prawidłowej socjalizacji, nauce czystości, budowaniu relacji i zaspokajaniu potrzeb szczeniaka. Pomożemy Ci, by życie z młodym psem było satysfakcjonującą przygodą."
      },
      {
        "@type": "Service",
        "name": "Wydarzenia",
        "description": "Regularne spotkania dla miłośników psów w bezpiecznej, spokojnej i przyjemnej atmosferze. Oferujemy różnorodne aktywności: rozmowy, planszówki, warsztaty kreatywne i inne. To doskonała okazja, by poznać innych psiarzy i odkryć nowe, ciekawe hobby w przyjaznym środowisku."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/szczekszczek",
      "https://www.instagram.com/szczek_szczek"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Szczek Szczek | Profesjonalne Szkolenia Psów we Wrocławiu</title>
        <meta 
          name="description" 
          content="Szczek Szczek oferuje profesjonalne szkolenia dla psów we Wrocławiu: nosework, spacery socjalizacyjne, konsultacje behawioralne i więcej. Skontaktuj się już dziś!" 
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Szczek Szczek | Profesjonalne Szkolenia Psów we Wrocławiu" />
        <meta 
          property="og:description" 
          content="Szczek Szczek oferuje profesjonalne szkolenia dla psów we Wrocławiu. Skontaktuj się już dziś!" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
