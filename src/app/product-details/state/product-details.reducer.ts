import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import * as ProductDetailsAction from './product-details.actions';

export interface ProductDetailsState {
  item: Product;
  loading: boolean;
  recommendProducts: Product[];
  breadcrumb: BreadCrumb[];
}

const initialState: ProductDetailsState = {
  item: null,
  loading: true,
  recommendProducts: [],
  breadcrumb: [],
};

export const productDetailsReducer = createReducer(
  initialState,
  on(ProductDetailsAction.loadProductDetailsSuccess, (state, { product }) => ({
    ...state,
    item: product,
    loading: false,
    breadcrumb: [{label: 'Home', link: '/'}, {label: product.title, link: product.id}]
  })),
  on(
    ProductDetailsAction.loadRecommendProductsSuccess,
    (state, { products }) => ({ ...state, recommendProducts: products })
  ),
);
