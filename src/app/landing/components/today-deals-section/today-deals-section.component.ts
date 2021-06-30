import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodayDealsProducts } from '../../state/landing.selectors';

@Component({
  selector: 'app-today-deals-section',
  templateUrl: './today-deals-section.component.html',
  styleUrls: ['./today-deals-section.component.scss'],
})
export class TodayDealsSectionComponent {
  todayDealProducts$ = this.store.select(selectTodayDealsProducts);
  constructor(private store: Store) {}
}
