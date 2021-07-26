import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { adapter, WishlistState } from './wishlist.reducer';

export const wishlistFeatureKey = 'wishlist';

export const wishlistFeatureState =
  createFeatureSelector<WishlistState>(wishlistFeatureKey);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectWishlistId = createSelector(wishlistFeatureState, selectIds);

export const selectWishlistIdSet = createSelector(selectWishlistId, (ids) => {
  const result = new Set<string | number>();
  ids.forEach((id: string | number) => result.add(id));
  return result;
});

export const selectWishlistEntities = createSelector(
  wishlistFeatureState,
  selectEntities
);

export const selectWishlistItems = createSelector(
  wishlistFeatureState,
  selectAll
);

export const selectTotalWishlistItems = createSelector(
  wishlistFeatureState,
  selectTotal
);

export const selectWishlistLoading = createSelector(
  wishlistFeatureState,
  (state) => state.loading
);

export const selectWishlistPaginationInfo = createSelector(
  wishlistFeatureState,
  (state) => ({
    page: state.page,
    limit: state.limit,
    totalItems: state.totalDocs,
  })
);

export const selectWishlistBreadcrumbData = createSelector(
  wishlistFeatureState,
  (state) =>
    [
      { label: 'Home', link: '/' },
      { label: 'Wishlist', link: '/wishlist' },
    ] as BreadCrumb[]
);
