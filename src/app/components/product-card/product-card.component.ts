import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() typeOfType: string;

  constructor(private cartservice: CartService) {}

  ngOnInit() {}

  getDiscountedPrice() {
    if (this.product.discount > 0)
      return (
        this.product.price - (this.product.price * this.product.discount) / 100
      );
  }

  addTocart() {
    this.cartservice.addItem(this.product);
  }
}
