import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import * as wishlistActions from './wishlist.actions';

export interface WishlistState extends EntityState<Product> {
  page: number;
  limit: number;
  totalDocs: number;
  loading: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
const initialState: WishlistState = adapter.getInitialState({
  page: 1,
  limit: 10,
  totalDocs: null,
  loading: true,
});

export const wishlistReducer = createReducer(
  initialState,
  on(wishlistActions.loadWishlistSuccess, (state, { res }) =>
    adapter.setAll(res.docs, {
      ...state,
      totalDocs: res.totalDocs,
      loading: false,
    })
  ),
  on(wishlistActions.addToWishlist, (state, { product }) =>
    adapter.addOne(product, state)
  ),
  on(wishlistActions.deleteFromWishlist, (state, { productId }) =>
    adapter.removeOne(productId, state)
  ),
  on(wishlistActions.changeWishlistPage, (state, { page }) => ({
    ...state,
    page,
  }))
);