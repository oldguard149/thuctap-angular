import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import * as LandingPageActions from './landing.actions';

export interface LandingPageState {
  newProducts: Product[];
  totayDealProducts: Product[];
  bestSellerProducts: Product[];
  newArrivalProducts: Product[];
  featureProducts: Product[];
}

const initalState: LandingPageState = {
  newProducts: [],
  totayDealProducts: [],
  bestSellerProducts: [],
  newArrivalProducts: [],
  featureProducts: [],
};

export const landingPageReducer = createReducer(
  initalState,
  on(
    LandingPageActions.loadNewProductsSuccess,
    (state, { products }) => ({ ...state, newProducts: products })
  ),
  on(
    LandingPageActions.loadTodayDealProductsSuccess,
    (state, { products }) => ({ ...state, totayDealProducts: products })
  ),
  on(
    LandingPageActions.loadBestSellerProductsSuccess,
    (state, { products }) => ({ ...state, bestSellerProducts: products })
  ),
  on(
    LandingPageActions.loadNewArrivalsProductsSuccess,
    (state, { products }) => ({ ...state, newArrivalProducts: products })
  ),
  on(
    LandingPageActions.loadFeatureProductsSuccess,
    (state, { products }) => ({ ...state, featureProducts: products })
  ),
);
