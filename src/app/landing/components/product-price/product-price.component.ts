import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {
  @Input() locale: string = 'USD';
  @Input() mainPrice: number = 34977;
  @Input() secondPrice: number = 34224;
  @Input() showSecondPrice: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
