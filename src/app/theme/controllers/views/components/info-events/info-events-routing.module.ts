import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoEventsPage } from './info-events.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoEventsPageRoutingModule {}
