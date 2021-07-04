import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
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
    console.log('delete confirm');
    this.isModalVisibleSubject.next(false);
  }

  cancelDelete() {
    console.log('cancel');
    this.isModalVisibleSubject.next(false);
  }

  handleClick() {
    this.isModalVisibleSubject.next(true);
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
