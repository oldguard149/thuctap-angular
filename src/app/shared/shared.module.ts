import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './components/label/label.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LabelComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
