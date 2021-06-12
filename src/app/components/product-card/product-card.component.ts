import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItemI } from '../../cart';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };
  cartItem: CartItemI;

  @Input() product: Product;
  @Input() typeOfType: string;

  constructor(
    private cartservice: CartService,
    private router: RouterService,
    ) {}

  ngOnInit() {
    console.log(this.product.id);
    const cart = new Cart(this.product);
    this.cartItem = cart.getItems().find(item => item.id === this.product.id);
  }

  getDiscountedPrice() {
    if (this.product.discount > 0)
      return (
        this.product.price - (this.product.price * this.product.discount) / 100
      );
  }

  addTocart() {
    this.cartservice.addItem(this.product);
  }

  moreDetails(id:any){
    this.router.goToUrl(`/product-details/${id}`)
  }
}
