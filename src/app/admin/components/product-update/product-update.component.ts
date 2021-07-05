import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetAdminMessages, updateProduct } from '../../state/admin.actions';
import { selectSelectedProduct } from '../../state/admin.selectors';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  selectedProduct$ = this.store.select(selectSelectedProduct);

  formSubmit(body) {
    this.store.dispatch(updateProduct({ body }));
    window.scroll(0, 0);
  }

  constructor(private store: Store) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
  }
}
