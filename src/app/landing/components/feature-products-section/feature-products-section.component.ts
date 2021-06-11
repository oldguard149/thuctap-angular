import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-products-section',
  templateUrl: './feature-products-section.component.html',
  styleUrls: ['./feature-products-section.component.scss']
})
export class FeatureProductsSectionComponent implements OnInit {
  breakpointsProductCard = {
    824: { slidesPerView: 3 },
    1280: { slidesPerView: 6 },
  };

  breakpointsLogo = {
    824: {slidesPerView: 4},
    1280: {slidesPerView: 6}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
