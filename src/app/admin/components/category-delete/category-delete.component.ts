import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { deleteCategory } from '../../state/admin.actions';
import { selectSelectedCategory } from '../../state/admin.selectors';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {
  selectedCategory$ = this.store.select(selectSelectedCategory);
  private isModalVisibleSubject = new BehaviorSubject(false);
  isVisible$ = this.isModalVisibleSubject.asObservable();

  confirmDelete() {
    this.store.dispatch(deleteCategory())
    this.isModalVisibleSubject.next(false);
  }

  cancelDelete() {
    this.isModalVisibleSubject.next(false);
  }

  handleClick() {
    this.isModalVisibleSubject.next(true);
  }

  constructor(private store: Store ) { }

  ngOnInit(): void {
  }

}
