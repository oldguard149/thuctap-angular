import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectAdminLoading,
  selectAdminMessages,
  selectPaginationInfo,
  selectProducts,
} from '../../state/admin.selectors';
import {
  changePage,
  deleteProduct,
  loadProducts,
  resetAdminMessages,
  resetPaginationInfo,
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
    this.store.select(selectAdminMessages),
    this.store.select(selectAdminLoading)
  ]).pipe(
    map(([products, paginationInfo, messages, loading]) => {
      return { products, paginationInfo, messages, loading };
    })
  );
  private isModalVisibleSubject = new BehaviorSubject(false);
  isVisible$ = this.isModalVisibleSubject.asObservable();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
    this.store.dispatch(resetPaginationInfo());
  }


  confirmDelete() {
    this.store.dispatch(deleteProduct());
    this.isModalVisibleSubject.next(false);
  }

  cancelDelete() {
    this.isModalVisibleSubject.next(false);
  }

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
    this.isModalVisibleSubject.next(true);
  }
}
