import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayTypes, pageLimits, sortOptions } from './static.data';
import * as ProductsActions from '../../state/products.actions';
import {
  selectCategories,
  selectDisplayListType,
  selectProductListIsLoading,
  selectProducts,
  selectSortType,
  selectHasNext,
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
  vm$ = combineLatest([
    this.store.select(selectProducts),
    this.store.select(selectDisplayListType),
    this.store.select(selectSortType),
    this.store.select(selectCategories),
    this.store.select(selectProductListIsLoading),
    this.store.select(selectHasNext),
  ]).pipe(
    map(
      ([
        products,
        displayType,
        sortType,
        categories,
        isLoading,
        hasNext,
      ]) => ({
        products,
        displayType,
        sortType,
        categories,
        isLoading,
        hasNext,
      })
    )
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

  handleLoadMore() {
    this.store.dispatch(ProductsActions.productListLoadMore());
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
