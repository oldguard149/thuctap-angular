import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { selectSelectedProduct } from '../../state/admin.selectors';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  selectedProduct$ = this.store.select(selectSelectedProduct);
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
