import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { setSelectedCategory } from '../../state/admin.actions';
import {
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
  ]).pipe(
    map(([paginationInfo, categories]) => ({ paginationInfo, categories }))
  );

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  handleUpdate(index: number) {
    this.store.dispatch(setSelectedCategory({index}));
    this.router.navigateByUrl('/admin/category-update');
  }

  handleDelete(index: number) {
    this.store.dispatch(setSelectedCategory({index}));
    this.router.navigateByUrl('/admin/category-delete');
  }
}
