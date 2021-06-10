import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingIndexComponent } from './components/landing-index/landing-index.component';

const routes: Routes = [
  { path: '', component: LandingIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
