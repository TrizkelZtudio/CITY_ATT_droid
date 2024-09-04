import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoNewsPage } from './info-news.page';

const routes: Routes = [
  {
    path: '',
    component: InfoNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoNewsPageRoutingModule {}
