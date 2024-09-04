import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrstFormPage } from './frst-form.page';

const routes: Routes = [
  {
    path: '',
    component: FrstFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrstFormPageRoutingModule {}
