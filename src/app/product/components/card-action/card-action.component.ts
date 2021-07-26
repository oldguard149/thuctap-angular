import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from 'src/app/auth/state/auth.selectors';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
})
export class CardActionComponent {
  @Input() productId: string;
  @Input() showReview: boolean = true;
  @Input() showAddToCart: boolean = true;
  @Input() isInWishlist: boolean = false;
  @Output() addToCart = new EventEmitter();
  @Output() wishlist = new EventEmitter();
  @Output() review = new EventEmitter();
  constructor(private store: Store) {}
  isLoggedIn$ = this.store.select(selectIsLoggedIn);


  handleClick(value: 'addToCart' | 'removeFromWishlist' | 'addToWishlist' | 'viewDetail' | 'review') {
    switch (value) {
      case 'addToCart':
        this.addToCart.emit('click');
        break;
      case 'addToWishlist':
        this.wishlist.emit('add');
        break;
      case 'removeFromWishlist':
        this.wishlist.emit('remove')
        break;
      case 'review':
        this.review.emit('click');
        break;
    }
  }
}
