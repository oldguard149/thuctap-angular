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
  @Output() addToCart = new EventEmitter();
  @Output() addToWishlist = new EventEmitter();
  @Output() review = new EventEmitter();
  constructor(private store: Store) {}
  isLoggedIn$ = this.store.select(selectIsLoggedIn);


  handleClick(value: 'addToCart' | 'wishlist' | 'viewDetail' | 'review') {
    switch (value) {
      case 'addToCart':
        this.addToCart.emit('click');
        break;
      case 'wishlist':
        this.addToWishlist.emit('click');
        break;
      case 'review':
        this.review.emit('click');
        break;
    }
  }
}
