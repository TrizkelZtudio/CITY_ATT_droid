import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportConstructorPage } from './report-constructor.page';

const routes: Routes = [
  {
    path: '',
    component: ReportConstructorPage
  },
  {
    path:'**',
    redirectTo:'/dashboard/home',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportConstructorPageRoutingModule {}
