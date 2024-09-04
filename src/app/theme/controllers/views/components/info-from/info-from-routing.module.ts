import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFromPage } from './info-from.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFromPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFromPageRoutingModule {}
