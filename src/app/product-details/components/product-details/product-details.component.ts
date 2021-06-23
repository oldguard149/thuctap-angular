import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExampleProduct } from 'src/app/product/components/mock-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product = ExampleProduct;
  cartForm: FormGroup = this.fb.group({
    quantity: ['1', Validators.required],
  });
  recommendProductsBreakpoint = {
    485: { slidesPerView: 2 },
    650: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };
  breadcrumbData = [
    {label: 'Home', link: '/'},
    {label: this.product.title, link: `/product/${this.product.id}`}
  ]
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addToCart() {
    console.log(this.cartForm.value);
  }

  changeQuantity(action: 'minus' | 'plus') {
    const currentQuantity = parseInt(this.quantity.value);
    if (action === 'minus') {
      currentQuantity === 1
        ? alert('Minimun quantity: 1')
        : this.quantity.setValue(currentQuantity - 1);
    } else {
      currentQuantity < this.product.quantity
        ? this.quantity.setValue(currentQuantity + 1)
        : alert(`Only ${this.product.quantity} items available`);
    }
  }

  get quantity() {
    return this.cartForm.get('quantity');
  }
}
