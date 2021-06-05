import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() cart: Cart;
  constructor() {}

  ngOnInit() {}
}
