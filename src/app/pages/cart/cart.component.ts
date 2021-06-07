import { Component, OnInit } from '@angular/core';
import { Cart } from '../../cart';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart(null);
  products: Product[] = [];
  constructor(
    private cartservice: CartService,
    private productservice: ProductsService
  ) {}

  ngOnInit() {
    this.cartservice.getCartData().subscribe(_data => {
      this.cart = _data;
      this.cart.items.map(item => {
        this.productservice.getProductById(item.id).subscribe(data => {
          this.products.push(data);
        });
      });
    });
  }
}
