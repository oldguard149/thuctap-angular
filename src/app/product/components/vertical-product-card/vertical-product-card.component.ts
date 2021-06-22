import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ExampleProduct } from '../mock-data';

@Component({
  selector: 'app-vertical-product-card',
  templateUrl: './vertical-product-card.component.html',
  styleUrls: ['./vertical-product-card.component.scss']
})
export class VerticalProductCardComponent implements OnInit {
  @Input() product: Product = ExampleProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
