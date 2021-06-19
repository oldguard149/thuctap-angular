import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyUnitService } from 'src/app/services/currency-unit.service';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {
  // @Input() locale: string = 'USD';
  @Input() mainPrice: number = 34977;
  @Input() secondPrice: number = 34224;
  @Input() showSecondPrice: boolean = true;
  locale$: Observable<string> = this.currencyUnit.locale$;
  
  constructor(
    private currencyUnit: CurrencyUnitService
  ) { }

  ngOnInit(): void {
  }

}
