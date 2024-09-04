import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'mkmedia',         
    loadChildren: () => import('../../views/components/media-files/media-files.module').then( m => m.MediaFilesPageModule)
  },
  {
    path: 'details/:isid',
    loadChildren: () => import('../../views/components/media-files/media-files.module').then(m => m.MediaFilesPageModule)
  },
  {
    path:'**',
    redirectTo: '/dashboard/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
 