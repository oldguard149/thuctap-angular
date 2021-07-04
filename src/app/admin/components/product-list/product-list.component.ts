import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectPaginationInfo,
  selectProducts,
} from '../../state/admin.selectors';
import { changePage, loadProducts } from '../../state/admin.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectProducts),
    this.store.select(selectPaginationInfo),
  ]).pipe(map(([products, paginationInfo]) => {
    console.log(paginationInfo)
    return { products, paginationInfo }
  }));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  handlePageChange(page: number) {
    this.store.dispatch(changePage({ page }));
    this.store.dispatch(loadProducts());
  }

  handleUpdate(index: number) {}
}
