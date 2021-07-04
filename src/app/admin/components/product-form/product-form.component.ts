import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import {
  selectCategoriesForSelectData,
  selectIsActiveForSelectData,
} from '../../state/admin.selectors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() summit = new EventEmitter<any>();
  form: FormGroup;
  buttonText: string;
  vm$ = combineLatest([
    this.store.select(selectCategoriesForSelectData),
    this.store.select(selectIsActiveForSelectData),
  ]).pipe(
    map(([categoriesSelectData, activeSelectData]) => ({
      categoriesSelectData,
      activeSelectData,
    }))
  );
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  handleSubmit() {
    this.summit.emit(this.form.value);
  }

  private initializeForm() {
    if (this.product) {
      // for update
      this.buttonText = 'Update';
      const category = this.product.category;
      this.form = this.fb.group({
        title: [this.product.title, Validators.required],
        desciption: [this.product.desciption],
        sku: [this.product.sku, Validators.required],
        images: this.fb.array([]),
        videos: this.fb.array([]),
        category: [category.length !== 0 ? category[0] : ''],
        status: [this.product.status, Validators.required],
        price: [this.product.price],
        quantity: [this.product.quantity],
        is_active: [this.product.is_active],
        promotion: ['null'],
      });

      this.product.images.forEach((img) =>
        this.images.push(this.fb.control(img))
      );
      this.product.videos.forEach((video) =>
        this.videos.push(this.fb.control(video))
      );
    } else {
      // for create
      this.buttonText = 'Create';
      this.form = this.fb.group({
        title: [this.product.title, Validators.required],
        description: [''],
        sku: ['', Validators.required],
        images: this.fb.array([]),
        videos: this.fb.array([]),
        category: [''],
        status: ['selling', Validators.required],
        price: [''],
        quantity: [''],
        is_active: [''],
        promotion: ['null'],
      });
    }
  }

  get images() {
    return this.form.get('images') as FormArray;
  }

  get videos() {
    return this.form.get('videos') as FormArray;
  }
}
