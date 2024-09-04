import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoEventsPageRoutingModule } from './info-events-routing.module';

import { InfoEventsPage } from './info-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoEventsPageRoutingModule
  ],
  declarations: [InfoEventsPage]
})
export class InfoEventsPageModule {}
