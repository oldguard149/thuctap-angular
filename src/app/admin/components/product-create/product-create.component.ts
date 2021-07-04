import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createProduct } from '../../state/admin.actions';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleSubmit(body: any) {
    console.log(body);
    // this.store.dispatch(createProduct({ body }));
  }
}
