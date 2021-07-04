import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedProduct } from '../../state/admin.selectors';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  selectedProduct$ = this.store.select(selectSelectedProduct);
  
  formSubmit(body) {
    console.log(body);
  }

  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
