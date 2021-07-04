import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { IndexComponent } from './components/index/index.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CategoryDeleteComponent } from './components/category-delete/category-delete.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-create', component: CategoryCreateComponent },
      { path: 'category-update', component: CategoryUpdateComponent},
      { path: 'category-delete', component: CategoryDeleteComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-create', component: ProductCreateComponent },
      { path: 'product-update', component: ProductUpdateComponent },
      { path: 'product-delete', component: ProductDeleteComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AdminRoutingModule {}
