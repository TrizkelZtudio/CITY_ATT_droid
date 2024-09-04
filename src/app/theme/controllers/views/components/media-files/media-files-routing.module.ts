import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaFilesPage } from './media-files.page';

const routes: Routes = [
  {
    path: '',
    component: MediaFilesPage
  }, 
   {
    path: 'audio',  
    loadChildren: () => import('../../resolvers/microphone/microphone.module').then(m => m.MicrophonePageModule)
  },
  {
    path: 'transmission',
    loadChildren: () => import('../../resolvers/bluetooth/bluetooth.module').then(m => m.BluetoothPageModule)
  },
  
  // Photo / Files
  {
    path: ':phofi',
    loadChildren: () => import('../../resolvers/report-constructor/report-constructor.module').then(m => m.ReportConstructorPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaFilesPageRoutingModule {}
