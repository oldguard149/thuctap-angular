import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SwiperModule } from 'swiper/angular';

import { SharedModule } from '../shared/shared.module';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeIconsComponent } from './components/header/three-icons/three-icons.component';
import { TopNavComponent } from './components/header/top-nav/top-nav.component';
import { TopNavDropdownComponent } from './components/header/top-nav-dropdown/top-nav-dropdown.component';
import { CategoriesNavComponent } from './components/header/categories-nav/categories-nav.component';
import { CategoriesNavDropdownComponent } from './components/header/categories-nav-dropdown/categories-nav-dropdown.component';
import { CategoriesNavPopupComponent } from './components/header/categories-nav-popup/categories-nav-popup.component';
import { FooterStaticComponent } from './components/footer/footer-static/footer-static.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThreeIconsComponent,
    TopNavComponent,
    TopNavDropdownComponent,
    CategoriesNavComponent,
    CategoriesNavDropdownComponent,
    CategoriesNavPopupComponent,
    FooterStaticComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
    SwiperModule,
    NzDropDownModule,
    NzCollapseModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
