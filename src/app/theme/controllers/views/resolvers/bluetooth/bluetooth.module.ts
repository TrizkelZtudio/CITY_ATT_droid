import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothPageRoutingModule } from './bluetooth-routing.module';

import { BluetoothPage } from './bluetooth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BluetoothPageRoutingModule
  ],
  declarations: [BluetoothPage]
})
export class BluetoothPageModule {}
