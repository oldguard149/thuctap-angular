import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {
  @Input() products: Product[];
  @Input() slidesPerView = 2;
  @Input() breakpoints = {
    824: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  };
}
