import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  loadCategories,
  resetAdminMessages,
  setSelectedCategory,
} from '../../state/admin.actions';
import {
  selectAdminLoading,
  selectAdminMessages,
  selectCategories,
  selectPaginationInfo,
} from '../../state/admin.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectPaginationInfo),
    this.store.select(selectCategories),
    this.store.select(selectAdminMessages),
    this.store.select(selectAdminLoading),
  ]).pipe(
    map(([paginationInfo, categories, messages, loading]) => ({
      paginationInfo,
      categories,
      messages,
      loading,
    }))
  );

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
  }

  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
  }

  handleUpdate(index: number) {
    this.store.dispatch(setSelectedCategory({ index }));
    this.router.navigateByUrl('/admin/category-update');
  }

  handleDelete(index: number) {
    this.store.dispatch(setSelectedCategory({ index }));
    this.router.navigateByUrl('/admin/category-delete');
  }
}
