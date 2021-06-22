import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LabelComponent } from './components/label/label.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SelectComponent } from './components/select/select.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LabelComponent,
    PaginationComponent,
    BreadcrumbComponent,
    SelectComponent,
    RadioGroupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    NzSelectModule,
    FormsModule,
    NzRadioModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    PaginationComponent,
    BreadcrumbComponent,
    SelectComponent,
    RadioGroupComponent
  ]
})
export class SharedModule { }
