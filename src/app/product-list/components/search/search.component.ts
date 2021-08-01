import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  changePageWhenSearchProducts,
  productListLoadMore,
  resetPage,
  searchProducts,
} from '../../state/products.actions';
import {
  selectHasNext,
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
  
  vm$ = combineLatest([
    this.store.select(selectProducts),
    this.store.select(selectPaginationInfo),
    this.store.select(selectProductListIsLoading),
    this.store.select(selectSearchBreadCrumbData),
    this.store.select(selectHasNext)
  ]).pipe(
    map(([products, paginationInfo, isLoading, breadcrumbData, hasNext]) => ({
      products,
      paginationInfo,
      isLoading,
      breadcrumbData,
      hasNext
    }))
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(searchProducts({searchKey: ''}));
  }

  ngOnDestroy() {
    this.store.dispatch(resetPage());
  }

  handlePageChange(page: number) {
    this.store.dispatch(changePageWhenSearchProducts({ page }));
    this.store.dispatch(searchProducts({searchKey: ''}));
  }

  handleLoadMore() {
    this.store.dispatch(productListLoadMore());
    this.store.dispatch(searchProducts({searchKey: ''}));
  }
}
