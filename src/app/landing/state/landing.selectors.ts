import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LandingPageState } from './landing.reducer';

export const landingPageFeatureKey = 'landing_page';

export const selectLandingPageFeatureState =
  createFeatureSelector<LandingPageState>(landingPageFeatureKey);

export const selectNewProducts = createSelector(
    selectLandingPageFeatureState,
    state => state.newProducts
);


export const selectTodayDealsProducts = createSelector(
    selectLandingPageFeatureState,
    state => state.totayDealProducts
);

export const selectBestSeller = createSelector(
    selectLandingPageFeatureState,
    state => state.bestSellerProducts
);

export const selectNewArrivalsProducts = createSelector(
    selectLandingPageFeatureState,
    state => state.newArrivalProducts
);

export const selectFeatureProducts = createSelector(
    selectLandingPageFeatureState,
    state => state.featureProducts
);