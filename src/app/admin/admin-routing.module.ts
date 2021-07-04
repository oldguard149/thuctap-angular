import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { IndexComponent } from './components/index/index.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-create', component: CategoryCreateComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-create', component: ProductCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AdminRoutingModule {}
