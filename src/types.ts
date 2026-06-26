export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingCategory {
  title: string;
  subtitle: string;
  items: PricingItem[];
}

export interface ReviewItem {
  quote: string;
  name: string;
  type: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
