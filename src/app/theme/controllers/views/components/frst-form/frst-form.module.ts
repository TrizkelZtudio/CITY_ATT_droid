import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrstFormPageRoutingModule } from './frst-form-routing.module';

import { FrstFormPage } from './frst-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FrstFormPageRoutingModule
  ],
  declarations: [FrstFormPage]
})
export class FrstFormPageModule {}
