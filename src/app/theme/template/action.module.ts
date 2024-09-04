import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsrToolsComponent } from '../template/usr-tools/usr-tools.component';
import { PanicComponent } from '../template/panic/panic.component';


@NgModule({
  declarations: [
      PanicComponent,
      UsrToolsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    PanicComponent,
    UsrToolsComponent
  ]
})
export class ActionModule { }
