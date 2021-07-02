import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  changePageWhenSearchProducts,
  searchProducts,
} from '../../state/products.actions';
import {
  selectPaginationInfo,
  selectProductListIsLoading,
  selectProducts,
  selectSearchBreadCrumbData,
} from '../../state/products.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  products$ = this.store.select(selectProducts);
  paginationInfo$ = this.store.select(selectPaginationInfo);
  isLoading$ = this.store.select(selectProductListIsLoading);
  breadcrumbData$ = this.store.select(selectSearchBreadCrumbData);
  vm$ = combineLatest([
    this.products$,
    this.paginationInfo$,
    this.isLoading$,
    this.breadcrumbData$,
  ]).pipe(
    map(([products, paginationInfo, isLoading, breadcrumbData]) => ({
      products,
      paginationInfo,
      isLoading,
      breadcrumbData,
    }))
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(searchProducts({searchKey: ''}));
  }

  handlePageChange(page: number) {
    this.store.dispatch(changePageWhenSearchProducts({ page }));
    this.store.dispatch(searchProducts({searchKey: ''}));
  }
}
