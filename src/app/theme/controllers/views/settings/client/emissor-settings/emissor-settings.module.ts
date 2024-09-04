import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { EmissorSettingsPageRoutingModule } from './emissor-settings-routing.module';

import { EmissorSettingsPage } from './emissor-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmissorSettingsPageRoutingModule
  ],
  declarations: [EmissorSettingsPage]
})
export class EmissorSettingsPageModule {}
