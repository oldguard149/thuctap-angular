import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ExampleProduct } from '../mock-data';

@Component({
  selector: 'app-horizontal-product-card',
  templateUrl: './horizontal-product-card.component.html',
  styleUrls: ['./horizontal-product-card.component.scss'],
})
export class HorizontalProductCardComponent implements OnInit {
  @Input() product: Product = ExampleProduct;
  constructor() {}

  ngOnInit(): void {}
}
