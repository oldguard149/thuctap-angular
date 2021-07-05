import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCategory } from '../../state/admin.actions';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private store: Store) { }

  formSubmit(body) {
    console.log(body);
    this.store.dispatch(createCategory({body}));
  }
  
  ngOnInit(): void {
  }

}
