import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { displayTypes, pageLimits, sortOptions } from './static.data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  pageLimit = pageLimits;
  sort = sortOptions;
  displayTypes = displayTypes;
  productArray = Array.from({ length: 10 });

  private displayTypeSubject = new BehaviorSubject('grid');
  displayType$ = this.displayTypeSubject.asObservable();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handlePageSizeChange(value: string) {
    this.router.navigate([], {
      queryParams: {
        page: value,
      },
      queryParamsHandling: 'merge',
    });
  }

  handleSortTypeChange(value: string) {
    this.router.navigate([], {
      queryParams: {
        sort: value,
      },
      queryParamsHandling: 'merge',
    });
  }

  handleColorAndPriceChange(value: string) {
    console.log(`Handle color and price ${value}`);
  }

  handleProductListTypeChange(value: string) {
    this.displayTypeSubject.next(value);
  }

  handlePageChange(page: number) {
    console.log(page);
  }
}
