import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {
  @Input() reviews: any[];
  starrWidth = 0;
  constructor() {}

  ngOnInit() {
    this.getStarrWidth();
  }
  getStarrWidth() {
    let s = 0;
    this.reviews.forEach((item, i, arr) => {
      s += (100 / 5) * item.nbrStars;
    });
    this.starrWidth = s / this.reviews.length;
  }
}
