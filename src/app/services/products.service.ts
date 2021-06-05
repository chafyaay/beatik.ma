import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../product';

@Injectable()
export class ProductsService {
  DATA: Observable<Product[]> = of([
    {
      id: 0,
      category: 'cos',
      brand: '21st Century',
      pname: 'Magnesium, 250 mg, 110 Tablets',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 105,
      stock: 6,
      images: [
        'https://s3.images-iherb.com/cen/cen22713/l/29.jpg',
        'https://s3.images-iherb.com/cen/cen22713/l/35.jpg'
      ],
      discount: 20,
      reviews: [
        { author: 'yassine', nbrStars: 4, comment: 'good' },
        { author: 'fouad', nbrStars: 5, comment: 'best' },
        { author: 'radi', nbrStars: 2, comment: 'not bad' }
      ]
    },
    {
      id: 1,
      category: 'cos',
      brand: 'Sports Research',
      pname: 'Collagen Peptides, Unflavored, 16 oz (454 g)',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 105,
      stock: 6,
      images: [
        'https://s3.images-iherb.com/sre/sre01018/l/32.jpg',
        'https://s3.images-iherb.com/sre/sre01018/l/37.jpg'
      ],
      discount: 10,
      reviews: [
        { author: 'yassine', nbrStars: 4, comment: 'good' },
        { author: 'fouad', nbrStars: 6, comment: 'best' },
        { author: 'radi', nbrStars: 2, comment: 'not bad' }
      ]
    },
    {
      id: 2,
      category: 'cos',
      brand: 'Sports Research',
      pname:
        'SUPERBA 2 Antarctic Krill Oil with Astaxanthin, 500 mg, 120 Softgels',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 200,
      stock: 16,
      images: [
        'https://s3.images-iherb.com/sre/sre01136/l/24.jpg',
        'https://s3.images-iherb.com/sre/sre01136/l/29.jpg'
      ],
      discount: 90,
      reviews: [
        { author: 'yassine', nbrStars: 4, comment: 'good' },
        { author: 'fouad', nbrStars: 6, comment: 'best' },
        { author: 'radi', nbrStars: 2, comment: 'not bad' }
      ]
    },
    {
      id: 3,
      category: 'cos',
      brand: 'Mild By Nature',
      pname: 'Witch Hazel, Rose Petal, Alcohol-Free, 12 fl oz (355 ml)',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 35,
      stock: 206,
      images: [
        'https://s3.images-iherb.com/mbn/mbn01358/l/14.jpg',
        'https://s3.images-iherb.com/mbn/mbn01358/l/15.jpg'
      ],
      discount: 20,
      reviews: [
        { author: 'yassine', nbrStars: 4, comment: 'good' },
        { author: 'fouad', nbrStars: 5, comment: 'best' },
        { author: 'radi', nbrStars: 2, comment: 'not bad' }
      ]
    }
  ]);
  constructor() {}
  getProductById(id: any) {
    // return this.DATA.pipe(filter(item=>item.filter(_item=>_item.id===id)))
  }
  getAllProducts() {
    return this.DATA.pipe(map(item => item));
  }
}
