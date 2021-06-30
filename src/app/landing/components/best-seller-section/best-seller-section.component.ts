import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectBestSellerProducts,
  selectNewArrivalsProducts,
} from '../../state/landing.selectors';

@Component({
  selector: 'app-best-seller-section',
  templateUrl: './best-seller-section.component.html',
  styleUrls: ['./best-seller-section.component.scss'],
})
export class BestSellerSectionComponent {
  $bestSellerProducts$ = this.store.select(selectBestSellerProducts);
  $newArrivalsProducts$ = this.store.select(selectNewArrivalsProducts);
  vm$ = combineLatest([
    this.$bestSellerProducts$,
    this.$newArrivalsProducts$,
  ]).pipe(
    map(([bestSellerProducts, newArrivalsProducts]) => ({
      bestSellerProducts,
      newArrivalsProducts,
    }))
  );
  constructor(private store: Store) {}
}
