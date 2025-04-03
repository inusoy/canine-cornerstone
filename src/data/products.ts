
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "psie-przedszkole",
    title: "Psie Przedszkole",
    link: "/training/psie-przedszkole",
    homepagePriority: 1,
  },
  {
    id: "psia-szkolka",
    title: "Psia Szkółka",
    link: "/training/psia-szkolka",
    homepagePriority: 2,
  },
  {
    id: "nosework",
    title: "Nosework",
    link: "/training/nosework",
    homepagePriority: 3,
  },
  {
    id: "spacery-socjalizacyjne",
    title: "Spacery Socjalizacyjne",
    link: "/training/spacery-socjalizacyjne",
    homepagePriority: 4,
  },
  {
    id: "sala-zabaw",
    title: "Sala Zabaw i Eksploracji",
    link: "/training/sala-zabaw",
    homepagePriority: 100,
  },
  {
    id: "treningi-indywidualne",
    title: "Treningi Indywidualne",
    link: "/training/treningi-indywidualne",
    homepagePriority: 6,
  },
  {
    id: "konsultacje-behawioralne",
    title: "Konsultacje Behawioralne",
    link: "/training/konsultacje-behawioralne",
    homepagePriority: 7,
  }
];

// Export all products for search functionality
export const allProducts = products;

// Export only training-related products for the training menu and homepage
// This is a filtered and sorted version of the products array
export const trainingProducts = products.filter(product => 
  product.link.startsWith("/training/")
).sort((a, b) => a.homepagePriority - b.homepagePriority);
