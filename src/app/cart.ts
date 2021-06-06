import { reduce } from 'rxjs/operators';
import { Product } from './product';

export class Cart {
  items: CartItemI[] = [];
  nbrItems: number;
  product: Product;

  constructor(data: Product) {
    this.nbrItems = 0;
    this.product = data;
    this.setNbrItems();
  }

  getItems() {
    this.items = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
    return this.items;
  }

  setItem(id: number, a?: number) {
    this.getItems();
    const existItem =
      this.items.length > 0 ? this.items.find(item => item.id == id) : null;
    if (this.product.stock > 0) {
      if (!existItem)
        if (a < 0) return;
        else this.items.push({ id: id, nbrItems: 1 });
      else {
        if (
          (existItem.nbrItems <= 0 && a < 0) ||
          existItem.nbrItems >= this.product.stock
        )
          return;
        else {
          existItem.nbrItems += a;
          if (existItem.nbrItems <= 0) {
            this.items = this.items.filter(item => item.id != existItem.id);
          }
        }
      }
    }
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.items));
    // set cart number
    this.setNbrItems();
  }
  setNbrItems() {
    this.nbrItems = 0;
    const items = this.getItems();
    if (items.length)
      items.map(item => {
        console.log(item);
        this.nbrItems += item.nbrItems;
      });
  }
}

export interface CartItemI {
  id: number;
  nbrItems: number;
}
