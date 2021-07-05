import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category.model';
import { selectAdminMessages, selectIsActiveForSelectData } from '../../state/admin.selectors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  activeSelectData$ = this.store.select(selectIsActiveForSelectData);
  messages$ = this.store.select(selectAdminMessages)
  @Input() category: Category;
  @Output() submit = new EventEmitter();
  form: FormGroup;
  defaultIsActive = true;
  buttonText: string;
  handleSubmit() {
    this.submit.emit(this.form.value);
  }

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  handleIsActiveChange(value: boolean) {
    this.form.get('is_active').setValue(value);
  }

  initializeForm() {
    if (this.category) {
      this.buttonText = 'Update';
      this.form = this.fb.group({
        name: [this.category.name],
        is_active: [this.category.is_active],
      });
      this.defaultIsActive = this.category.is_active;
    } else {
      this.buttonText = 'Create';
      this.form = this.fb.group({
        name: [''],
        is_active: [this.defaultIsActive],
      });
    }
  }
}
