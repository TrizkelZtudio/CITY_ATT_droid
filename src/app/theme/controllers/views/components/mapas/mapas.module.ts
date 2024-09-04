import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapasPageRoutingModule } from './mapas-routing.module';

import { MapasPage } from './mapas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MapasPageRoutingModule
  ],
  declarations: [MapasPage]
})
export class MapasPageModule {}
