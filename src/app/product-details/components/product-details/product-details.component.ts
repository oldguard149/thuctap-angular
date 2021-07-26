import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { selectIsLoggedIn } from 'src/app/auth/state/auth.selectors';
import { productDetailAddToCart } from 'src/app/cart/state/cart.actions';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import {
  addToWishlist,
  deleteFromWishlist,
} from 'src/app/wishlist/state/wishlist.actions';
import { selectWishlistIdSet } from 'src/app/wishlist/state/wishlist.selectors';
import {
  loadProductDetails,
  loadRecommendProducts,
} from '../../state/product-details.actions';
import {
  selectProductDetails,
  selectProductDetailsBreadcrumb,
  selectProductDetailsLoading,
  selectProductQuantity,
  selectRecommendProducts,
} from '../../state/product-details.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  cartForm: FormGroup = this.fb.group({
    quantity: [
      '1',
      [Validators.required, Validators.min(1), Validators.pattern(/^[1-9]*/)],
    ],
  });

  vm$ = combineLatest([
    this.store.select(selectProductDetails),
    this.store.select(selectProductQuantity),
    this.store.select(selectProductDetailsBreadcrumb),
    this.store.select(selectIsLoggedIn),
    this.store.select(selectProductDetailsLoading),
    this.store.select(selectRecommendProducts),
    this.store.select(selectWishlistIdSet),
  ]).pipe(
    map(
      ([
        product,
        productQuantity,
        breadcrumb,
        isLoggedIn,
        loading,
        recommendProducts,
        wishlistIds,
      ]) => ({
        product,
        productQuantity,
        breadcrumb,
        isLoggedIn,
        loading,
        recommendProducts,
        wishlistIds,
      })
    )
  );

  addToCart(product: Product) {
    const orderQuantity = parseInt(this.quantity.value);
    const item = {
      id: product._id,
      title: product.title,
      quantity: product.quantity,
      orderQuantity: orderQuantity,
      images: product.images,
      price: product.price,
    } as CartItem;
    this.store.dispatch(productDetailAddToCart({ item: item }));
  }

  // product get from product detail api dont have 'id' field
  handleWishlistAction(action: 'add' | 'remove', rawProduct: Product) {
    console.log(action)
    if (action === 'add') {
      const product = { ...rawProduct, id: rawProduct._id };
      this.store.dispatch(addToWishlist({ product }));
    } else {
      this.store.dispatch(deleteFromWishlist({ productId: rawProduct._id }));
    }
  }

  changeQuantity(action: 'minus' | 'plus', quantity: number) {
    const currentQuantity = parseInt(this.quantity.value);
    if (action === 'minus') {
      currentQuantity < 1
        ? this.message.createMessage('Minimun quantity: 1', 'error')
        : this.quantity.setValue(currentQuantity - 1);
    } else {
      currentQuantity < quantity
        ? this.quantity.setValue(currentQuantity + 1)
        : this.message.createMessage(
            `Only ${quantity} items available`,
            'error'
          );
      console.log(quantity);
    }
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private message: PopupMessageService
  ) {}
  private destroyed = new Subject<void>();
  ngOnInit(): void {
    this.reactToProductChange();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  private reactToProductChange() {
    this.route.params.pipe(takeUntil(this.destroyed)).subscribe((params) => {
      const productId = params['id'];
      this.store.dispatch(loadProductDetails({ productId: productId }));
      this.store.dispatch(loadRecommendProducts({ productId: productId }));
    });
  }
  recommendProductsBreakpoint = {
    485: { slidesPerView: 2 },
    650: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };
  get quantity() {
    return this.cartForm.get('quantity');
  }
}
