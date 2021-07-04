import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ProductAdminService } from './services/product-admin.service';
import { BuyerAdminService } from './services/buyer-admin.service';
import { CategoryAdminService } from './services/category-admin.service';
import { OrderAdminService } from './services/order-admin.service';
import { AdminFeatureKey } from './state/admin.selectors';
import { adminReducer } from './state/admin.reducer';
import { ProductEffects } from './state/product.effects';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryDeleteComponent } from './components/category-delete/category-delete.component';
import { CategoryEffects } from './state/category.effects';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

@NgModule({
  declarations: [
    IndexComponent,
    SidenavComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    ConfirmDeleteComponent,
    CategoryFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    SharedModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NzModalModule,
    StoreModule.forFeature(AdminFeatureKey, adminReducer),
    EffectsModule.forFeature([ProductEffects, CategoryEffects]),
  ],
  providers: [
    { useClass: ProductAdminService, provide: ProductAdminService },
    { useClass: BuyerAdminService, provide: BuyerAdminService },
    { useClass: CategoryAdminService, provide: CategoryAdminService },
    { useClass: OrderAdminService, provide: OrderAdminService },
  ],
})
export class AdminModule {}
