import { Component, Input, OnInit } from '@angular/core';
import { CartItemI } from '../../cart';
import { Product } from '../../product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input()
  cartItem: CartItemI;
  @Input()
  product: Product;

  constructor() {}

  ngOnInit() {}
}
