import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectPaginationInfo,
  selectProducts,
} from '../../state/admin.selectors';
import {
  changePage,
  loadProducts,
  setSelectedProduct,
} from '../../state/admin.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectProducts),
    this.store.select(selectPaginationInfo),
  ]).pipe(
    map(([products, paginationInfo]) => {
      return { products, paginationInfo };
    })
  );

  handlePageChange(page: number) {
    this.store.dispatch(changePage({ page }));
    this.store.dispatch(loadProducts());
  }

  handleUpdate(index: number) {
    this.store.dispatch(setSelectedProduct({ index }));
    this.router.navigateByUrl('/admin/product-update');
  }

  handleRemove(index: number) {
    this.store.dispatch(setSelectedProduct({ index }));
    this.router.navigateByUrl('/admin/product-delete');
  }

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
