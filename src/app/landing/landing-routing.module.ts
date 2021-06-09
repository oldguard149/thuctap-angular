import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionHeaderHeader2Component } from './components/section-header-header2/section-header-header2.component';

const routes: Routes = [
  { path: '', component: SectionHeaderHeader2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
