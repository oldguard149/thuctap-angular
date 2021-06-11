import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit {
  breakpoints = {
    824: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  };
  constructor() {}

  ngOnInit(): void {}
}
