import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { IndexComponent } from './components/index/index.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-create', component: CategoryCreateComponent },
      { path: 'category-update', component: CategoryUpdateComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-create', component: ProductCreateComponent },
      { path: 'product-update', component: ProductUpdateComponent },
      { path: 'order-list', component: OrdersListComponent },
      { path: 'order-details', component: OrdersDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
