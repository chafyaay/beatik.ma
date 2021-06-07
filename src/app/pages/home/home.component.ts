import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  constructor(private product_service: ProductsService) {}

  ngOnInit() {
    this.product_service.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
}
