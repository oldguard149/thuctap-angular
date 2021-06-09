import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SectionHeaderTopnavComponent } from './components/section-header-topnav/section-header-topnav.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SectionHeaderHeader2Component } from './components/section-header-header2/section-header-header2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DropdownComponent,
    SectionHeaderTopnavComponent,
    SectionHeaderComponent,
    SectionHeaderHeader2Component
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
