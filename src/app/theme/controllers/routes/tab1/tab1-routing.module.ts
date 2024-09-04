import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  { 
    path: 'config',
    loadChildren: () => import('../../views/settings/me/me.module').then(m => m.MePageModule )
  },
  { 
    path: 'frstform',
    loadChildren: () => import('../../views/components/frst-form/frst-form.module').then(m => m.FrstFormPageModule )
  },
  { 
    path: 'from',
    loadChildren: () => import('../../views/components/info-from/info-from.module').then(m => m.InfoFromPageModule )
  },
  { 
    path: 'mapas',
    loadChildren: () => import('../../views/components/mapas/mapas.module').then(m => m.MapasPageModule )
  },
  { 
    path: 'paper/:nnw',
    loadChildren: () => import('../../views/components/info-news/info-news.module').then(m => m.InfoNewsPageModule)
  },
  {
    path: 'wsemit/:nevent',
    loadChildren: () => import('../../views/components/info-events/info-events.module').then(m => m.InfoEventsPageModule)
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
export class Tab1PageRoutingModule {}
