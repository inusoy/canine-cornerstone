
export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  link: string;
  showOnHomepage: boolean;
  homepagePriority: number;
  isNew?: boolean;
  discount?: {
    percentage: number;
    validUntil: Date;
  };
  features: string[];
  duration: string;
  groupSize: string;
}
