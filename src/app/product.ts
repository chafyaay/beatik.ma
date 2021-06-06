export class Product {
  id: any;
  pname: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  images: string[];
  discount: number;
  reviews: any[];
  promotion?: PromoI;
  constructor() {}
}
export interface PromoI {
  newArrival: boolean;
  selectedForYou: boolean;
  promotion: boolean;
}
