import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedCategory } from '../../state/admin.selectors';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  selectedCategory$ = this.store.select(selectSelectedCategory);

  formSubmit(body) {
    console.log(body);
  }
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
