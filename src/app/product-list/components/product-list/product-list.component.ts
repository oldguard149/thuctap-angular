import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayTypes, pageLimits, sortOptions } from './static.data';
import * as ProductsActions from '../../state/products.actions';
import {
  selectCategories,
  selectDisplayListType,
  selectProductListIsLoading,
  selectPageLimit,
  selectPaginationInfo,
  selectProducts,
  selectSortType,
} from '../../state/products.selectors';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { SortTypes } from '../../state/products.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectProducts);
  displayType$ = this.store.select(selectDisplayListType);
  sortType$ = this.store.select(selectSortType);
  pageLimit$ = this.store.select(selectPageLimit);
  paginationInfo$ = this.store.select(selectPaginationInfo);
  categories$ = this.store.select(selectCategories);
  isLoading$ = this.store.select(selectProductListIsLoading);
  vm$ = combineLatest([
    this.products$,
    this.displayType$,
    this.sortType$,
    this.paginationInfo$,
    this.categories$,
    this.isLoading$
  ]).pipe(
    map(([products, displayType, sortType, paginationInfo, categories, isLoading]) => ({
      products,
      displayType,
      sortType,
      paginationInfo,
      categories,
      isLoading
    }))
  );

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.initializeQueryParams());
    this.loadProducts();
    this.store.dispatch(ProductsActions.loadCategories());
  }

  ngOnDestroy(): void {
    this.store.dispatch(ProductsActions.resetPage());
  }

  handlePageLimitChange(value: number) {
    this.store.dispatch(ProductsActions.changePageLimit({ limit: value }));
    this.loadProducts();
  }

  handlePageChange(page: number) {
    this.store.dispatch(ProductsActions.changePage({ page }));
    this.loadProducts();
  }

  handleProductListTypeChange(value: 'grid' | 'column') {
    this.store.dispatch(
      ProductsActions.changeListDisplayType({ listType: value })
    );
  }

  handleSortTypeChange(value: SortTypes) {
    this.store.dispatch(ProductsActions.changeSortType({ sortType: value }));
  }

  handleColorAndPriceChange(value: string) {
    console.log(`Handle color and price ${value}`);
  }

  constructor(private store: Store) {}
  sort = sortOptions;
  breadcrumbData: BreadCrumb[] = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: `/collections/all` },
  ];
  listDisplayTypes = displayTypes;
  pageLimits = pageLimits;

  private loadProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
