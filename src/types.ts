export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  detailedDescription: string;
  price: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  highlights: string[];
  specs: Record<string, string>;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  isVerified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
