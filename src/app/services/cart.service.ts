import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { Cart } from '../cart';
import { Product } from '../product';
import { NotificationService } from './notification.service';

@Injectable()
export class CartService {
  cart: Cart = new Cart(null);
  cartSubject = new BehaviorSubject<Cart>(this.cart);
  currentCart = this.cartSubject.asObservable();

  cartNbrItems = 0;
  cartNbrItemsSubject = new BehaviorSubject<number>(this.cartNbrItems);
  currentCartNbrItems = this.cartNbrItemsSubject.asObservable();

  constructor(private notifService: NotificationService) {}

  addItem(item: Product) {
    this.cart = new Cart(item);
    this.cart.setItem(item.id, 1);
    this.cartSubject.next(this.cart);
    this.cartNbrItemsSubject.next(this.cart.nbrItems);
  }

  getCartData() {
    return this.currentCart;
  }

  getCurrentCartItem() {
    this.cartNbrItemsSubject.next(this.cart.nbrItems);
    return this.currentCartNbrItems;
  }
}
