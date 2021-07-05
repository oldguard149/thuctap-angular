import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import {
  selectAdminMessages,
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
  @Output() submit = new EventEmitter();
  form: FormGroup;
  buttonText: string;
  vm$ = combineLatest([
    this.store.select(selectCategoriesForSelectData),
    this.store.select(selectIsActiveForSelectData),
    this.store.select(selectAdminMessages),
  ]).pipe(
    map(([categoriesSelectData, activeSelectData, messages]) => ({
      categoriesSelectData,
      activeSelectData,
      messages
    }))
  );

  defaultCategory = '';
  defaultIsActive = true;
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  handleSubmit() {
    this.submit.emit(this.form.value);
  }

  private initializeForm() {
    if (this.product) {
      // for update
      this.buttonText = 'Update';
      const category = this.product.category;
      const currentCatgoryId = category.length !== 0 ? category[0]._id : '';
      this.form = this.fb.group({
        title: [this.product.title, Validators.required],
        desciption: [this.product.desciption],
        sku: [this.product.sku, Validators.required],
        images: this.fb.array([]),
        videos: this.fb.array([]),
        category: this.fb.array([
          this.fb.control(currentCatgoryId),
        ]),
        status: [this.product.status, Validators.required],
        price: [this.product.price, Validators.required],
        quantity: [this.product.quantity, Validators.required],
        is_active: [this.product.is_active],
        // promotion: [''],
      });

      this.product.images.forEach((img) =>
        this.images.push(this.fb.control(img))
      );
      this.product.videos.forEach((video) =>
        this.videos.push(this.fb.control(video))
      );
      this.defaultCategory = currentCatgoryId;
      this.defaultIsActive = this.product.is_active;
    } else {
      // for create
      this.buttonText = 'Create';
      this.form = this.fb.group({
        title: ['', Validators.required],
        desciption: [''],
        sku: ['', Validators.required],
        images: this.fb.array([this.fb.control('')]),
        videos: this.fb.array([this.fb.control('')]),
        category: this.fb.array([this.fb.control(this.defaultCategory)]),
        status: ['selling', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required],
        is_active: [this.defaultIsActive],
        // promotion: [''],
      });
    }
  }

  

  handeCategoryChange(value: string) {
    this.category.controls[0].setValue(value);
  }

  handleIsActiveChange(value: boolean) {
    this.form.get('is_active').setValue(value);
  }

  get category() {
    return this.form.get('category') as FormArray;
  }

  get images() {
    return this.form.get('images') as FormArray;
  }

  get videos() {
    return this.form.get('videos') as FormArray;
  }

  removeImageControl(index: number) {
    this.images.removeAt(index);
  }

  addImageControl() {
    this.images.push(this.fb.control(['']));
  }

  removeVideoControl(index: number) {
    this.videos.removeAt(index);
  }

  addVideoControl() {
    this.videos.push(this.fb.control(['']));
  }

  get formControls() {
    return this.form.controls;
  }
}
