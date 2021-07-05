import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  resetAdminMessages,
  updateCategory,
  loadCategories,
} from '../../state/admin.actions';
import { selectSelectedCategory } from '../../state/admin.selectors';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent implements OnInit {
  selectedCategory$ = this.store.select(selectSelectedCategory);

  formSubmit(body) {
    console.log(body);
    this.store.dispatch(updateCategory({ body }));
  }

  constructor(private store: Store) {}
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
    this.store.dispatch(loadCategories());
  }
}
