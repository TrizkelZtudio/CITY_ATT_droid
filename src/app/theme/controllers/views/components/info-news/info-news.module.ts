import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoNewsPageRoutingModule } from './info-news-routing.module';

import { InfoNewsPage } from './info-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoNewsPageRoutingModule
  ],
  declarations: [InfoNewsPage]
})
export class InfoNewsPageModule {}
