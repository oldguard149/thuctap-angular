import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductsForLandingPage } from '../../state/landing.actions';

@Component({
  selector: 'app-landing-index',
  templateUrl: './landing-index.component.html',
  styleUrls: ['./landing-index.component.scss']
})
export class LandingIndexComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProductsForLandingPage());
  }

}
