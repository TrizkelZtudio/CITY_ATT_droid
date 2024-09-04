import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'dashboard',
    loadChildren: () => import('./theme/controllers/routes/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/pages/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./theme/controllers/views/components/loading/loading.module').then( m => m.LoadingPageModule)    
  },
  {
    path: '**',
    redirectTo:'/dashboard/home',
    pathMatch:'full' 
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
