import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTotalCartItems } from 'src/app/cart/state/cart.selectors';

@Component({
  selector: 'app-three-icons',
  templateUrl: './three-icons.component.html',
  styleUrls: ['./three-icons.component.scss']
})
export class ThreeIconsComponent implements OnInit {
  @Input() textColor: string = 'text-gray-900';
  totalCartItem$ = this.store.select(selectTotalCartItems);
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
