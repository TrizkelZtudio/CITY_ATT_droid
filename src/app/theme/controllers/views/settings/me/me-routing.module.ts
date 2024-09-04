import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MePage } from './me.page';

const routes: Routes = [
  {
    path: '',
    component: MePage
  },  
  {
    path: 'ilemissor',
    loadChildren: () => import('../client/emissor-settings/emissor-settings.module').then(m => m.EmissorSettingsPageModule)
  },  
  {
    path: 'comments',
    loadChildren: () => import('../client/comments/comments.module').then(m => m.CommentsPageModule)
  },
  {
    path:'**', 
    redirectTo: '/dashboard/more/settings',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MePageRoutingModule {}
