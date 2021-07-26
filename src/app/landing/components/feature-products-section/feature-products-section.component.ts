import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureProducts } from '../../state/landing.selectors';

@Component({
  selector: 'app-feature-products-section',
  templateUrl: './feature-products-section.component.html',
  styleUrls: ['./feature-products-section.component.scss']
})
export class FeatureProductsSectionComponent {
  breakpointsProductCard = {
    824: { slidesPerView: 3 },
    1280: { slidesPerView: 6 },
  };

  breakpointsLogo = {
    824: {slidesPerView: 4},
    1280: {slidesPerView: 6}
  }
  constructor(private store: Store) { }
  featureProducts$ = this.store.select(selectFeatureProducts);

  logoUrl = [
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-01_170x130.png?v=1493771872',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-02_170x130.png?v=1493771880',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-03_170x130.png?v=1493771887',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-04_170x130.png?v=1493771893',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-05_170x130.png?v=1493771900',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-06_170x130.png?v=1493771907',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-01_170x130.png?v=1493771872',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-02_170x130.png?v=1493771880',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-03_170x130.png?v=1493771887',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-04_170x130.png?v=1493771893',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-05_170x130.png?v=1493771900',
    'https://cdn.shopify.com/s/files/1/1939/5421/files/br-06_170x130.png?v=1493771907'
  ]
}
