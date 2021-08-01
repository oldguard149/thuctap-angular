import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { wishlistAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import {
  changeWishlistPage,
  deleteFromWishlist,
  loadWishlist,
  wishListLoadMore,
} from '../../state/wishlist.actions';
import {
  selectTotalWishlistItems,
  selectWishlistBreadcrumbData,
  selectWishlistHasNext,
  selectWishlistItems,
  selectWishlistLoading,
  selectWishlistPaginationInfo,
} from '../../state/wishlist.selectors';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectWishlistItems),
    this.store.select(selectWishlistPaginationInfo),
    this.store.select(selectWishlistBreadcrumbData),
    this.store.select(selectTotalWishlistItems),
    this.store.select(selectWishlistLoading),
    this.store.select(selectWishlistHasNext)
  ]).pipe(
    map(([products, paginationInfo, breadcrumbData, total, loading, hasNext]) => ({
      products,
      paginationInfo,
      breadcrumbData,
      total,
      loading,
      hasNext
    }))
  );

  getCartInfoFromProduct: (p: Product) => CartItem;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.getCartInfoFromProduct = getCartInfoFromProduct;
    this.store.dispatch(loadWishlist());
  }

  addToCart(item: CartItem) {
    this.store.dispatch(wishlistAddToCart({ item }));
  }

  removeFromWishlist(id: string) {
    this.store.dispatch(deleteFromWishlist({ productId: id }));
  }

  handleLoadMore() {
    this.store.dispatch(wishListLoadMore());
    this.store.dispatch(loadWishlist());
  }
}
