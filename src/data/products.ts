
import { TrainingProduct, BundleProduct } from "@/types/product";

export const trainingProducts: TrainingProduct[] = [
  {
    id: "nosework",
    type: "training",
    title: "Nosework Training",
    description: "Discover your dog's natural scenting abilities through fun and engaging nosework training.",
    price: "From $399",
    link: "/training/nosework",
    showOnHomepage: true,
    homepagePriority: 3,
    isNew: true,
    features: [
      "Foundation scent detection skills",
      "Search patterns and techniques",
      "Building drive and motivation",
      "Advanced search scenarios"
    ],
    duration: "6 weeks",
    groupSize: "Max 4 dogs"
  },
  {
    id: "obedience",
    type: "training",
    title: "Basic Obedience Training",
    description: "Master essential commands and establish a strong foundation for good behavior.",
    price: "From $299",
    link: "/training/obedience",
    showOnHomepage: true,
    homepagePriority: 1,
    features: [
      "Sit, Stay, and Come",
      "Loose-leash walking",
      "Leave it and Drop it",
      "Off-leash reliability"
    ],
    duration: "8 weeks",
    groupSize: "Max 6 dogs"
  },
  {
    id: "puppy-kindergarten",
    type: "training",
    title: "Puppy Kindergarten",
    description: "Give your puppy the best start with early socialization and basic training.",
    price: "From $249",
    link: "/training/puppy-kindergarten",
    showOnHomepage: true,
    homepagePriority: 2,
    discount: {
      percentage: 15,
      validUntil: new Date("2024-05-01")
    },
    features: [
      "Early socialization",
      "Basic manners and commands",
      "Bite inhibition",
      "Confidence building"
    ],
    duration: "6 weeks",
    groupSize: "Max 6 puppies"
  },
  {
    id: "dog-school",
    type: "training",
    title: "Dog School",
    description: "Comprehensive training programs for dogs of all ages and skill levels.",
    price: "From $349",
    link: "/training/dog-school",
    showOnHomepage: false,
    homepagePriority: 4,
    features: [
      "Small group classes",
      "Individual attention",
      "Progressive skill development",
      "Real-world practice scenarios"
    ],
    duration: "12 weeks",
    groupSize: "Max 8 dogs"
  },
  {
    id: "socialisation-walks",
    type: "training",
    title: "Socialisation Walks",
    description: "Structured group walks to help your dog develop social skills and confidence.",
    price: "From $149",
    link: "/training/socialisation-walks",
    showOnHomepage: false,
    homepagePriority: 5,
    features: [
      "Professional supervision",
      "Small groups for safety",
      "Various environments",
      "Behavior monitoring"
    ],
    duration: "4 weeks",
    groupSize: "Max 4 dogs"
  }
];

export const bundleProducts: BundleProduct[] = [
  {
    id: "puppy-complete",
    type: "bundle",
    title: "Complete Puppy Package",
    description: "Give your puppy the perfect start with our comprehensive training bundle.",
    price: "From $549",
    link: "/training/bundles/puppy-complete",
    showOnHomepage: true,
    homepagePriority: 0,
    isNew: true,
    includedProducts: [
      trainingProducts.find(p => p.id === "puppy-kindergarten"),
      trainingProducts.find(p => p.id === "obedience")
    ] as TrainingProduct[],
    savingsAmount: "Save $150",
    discount: {
      percentage: 20,
      validUntil: new Date("2024-05-01")
    }
  }
];

export const allProducts: (TrainingProduct | BundleProduct)[] = [
  ...trainingProducts,
  ...bundleProducts
];

export const getHomePageProducts = () => {
  return allProducts
    .filter(product => product.showOnHomepage)
    .sort((a, b) => a.homepagePriority - b.homepagePriority);
};
