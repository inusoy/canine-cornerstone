
export interface BaseProduct {
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
}

export interface TrainingProduct extends BaseProduct {
  type: 'training';
  features: string[];
  duration: string;
  groupSize: string;
}

export interface BundleProduct extends BaseProduct {
  type: 'bundle';
  includedProducts: TrainingProduct[];
  savingsAmount: string;
}

export type Product = TrainingProduct | BundleProduct;
