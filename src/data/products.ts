
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "psie-przedszkole",
    title: "Psie Przedszkole",
    description: "Zajęcia dla szczeniąt, które rozwijają pozytywne zachowania i umiejętności socjalizacyjne.",
    price: "Od 249 zł",
    link: "/training/psie-przedszkole",
    showOnHomepage: true,
    homepagePriority: 1,
    discount: {
      percentage: 15,
      validUntil: new Date("2024-05-01")
    },
    features: [
      "Wczesna socjalizacja",
      "Podstawowe komendy",
      "Nauka czystości",
      "Budowanie pewności siebie"
    ],
    duration: "6 tygodni",
    groupSize: "Max 6 szczeniąt"
  },
  {
    id: "psia-szkolka",
    title: "Psia Szkółka",
    description: "Kompleksowy program szkoleniowy dla psów w każdym wieku, koncentrujący się na posłuszeństwie i dobrej komunikacji.",
    price: "Od 349 zł",
    link: "/training/psia-szkolka",
    showOnHomepage: true,
    homepagePriority: 2,
    features: [
      "Podstawowe komendy",
      "Chodzenie na luźnej smyczy",
      "Przywołanie",
      "Samokontrola"
    ],
    duration: "8 tygodni",
    groupSize: "Max 6 psów"
  },
  {
    id: "nosework",
    title: "Nosework",
    description: "Odkryj naturalne zdolności węchowe swojego psa poprzez zabawę i angażujący trening nosework.",
    price: "Od 399 zł",
    link: "/training/nosework",
    showOnHomepage: true,
    homepagePriority: 3,
    isNew: true,
    features: [
      "Podstawy wykrywania zapachów",
      "Techniki wyszukiwania",
      "Budowanie motywacji do pracy",
      "Zaawansowane scenariusze treningowe"
    ],
    duration: "6 tygodni",
    groupSize: "Max 4 psy"
  },
  {
    id: "spacery-socjalizacyjne",
    title: "Spacery Socjalizacyjne",
    description: "Zorganizowane spacery grupowe, które pomagają psu rozwijać umiejętności społeczne i pewność siebie.",
    price: "Od 149 zł",
    link: "/training/spacery-socjalizacyjne",
    showOnHomepage: true,
    homepagePriority: 4,
    features: [
      "Profesjonalny nadzór",
      "Małe grupy dla bezpieczeństwa",
      "Różnorodne środowiska",
      "Monitorowanie zachowania"
    ],
    duration: "4 tygodnie",
    groupSize: "Max 4 psy"
  },
  {
    id: "sala-zabaw",
    title: "Sala Zabaw i Eksploracji",
    description: "Bezpieczna przestrzeń, gdzie Twój pies może bawić się, eksplorować i uczyć się pod nadzorem specjalistów.",
    price: "Od 99 zł",
    link: "/training/sala-zabaw",
    showOnHomepage: true,
    homepagePriority: 5,
    features: [
      "Kontrolowane środowisko zabawy",
      "Różnorodne przeszkody i zabawki",
      "Ćwiczenia mentalne",
      "Praca nad pewnością siebie"
    ],
    duration: "Sesje 60-minutowe",
    groupSize: "Max 3 psy"
  },
  {
    id: "treningi-indywidualne",
    title: "Treningi Indywidualne",
    description: "Spersonalizowane sesje szkoleniowe dostosowane do konkretnych potrzeb Twojego psa.",
    price: "Od 199 zł",
    link: "/training/treningi-indywidualne",
    showOnHomepage: false,
    homepagePriority: 6,
    features: [
      "Pełna uwaga trenera",
      "Program dostosowany do potrzeb psa",
      "Elastyczne terminy",
      "Rozwiązywanie konkretnych problemów"
    ],
    duration: "Sesje 60-minutowe",
    groupSize: "1 pies"
  },
  {
    id: "konsultacje-behawioralne",
    title: "Konsultacje Behawioralne",
    description: "Specjalistyczne konsultacje pomagające zrozumieć i rozwiązać problemy behawioralne Twojego psa.",
    price: "Od 249 zł",
    link: "/training/konsultacje-behawioralne",
    showOnHomepage: false,
    homepagePriority: 7,
    features: [
      "Analiza zachowania psa",
      "Plan działania i ćwiczeń",
      "Wsparcie w implementacji",
      "Follow-up po konsultacji"
    ],
    duration: "90-120 minut",
    groupSize: "1 pies"
  }
];

export const getHomePageProducts = () => {
  return products
    .filter(product => product.showOnHomepage)
    .sort((a, b) => a.homepagePriority - b.homepagePriority);
};
