import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFromPageRoutingModule } from './info-from-routing.module';

import { InfoFromPage } from './info-from.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFromPageRoutingModule
  ],
  declarations: [InfoFromPage]
})
export class InfoFromPageModule {}
