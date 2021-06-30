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

}
