import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home/home.component';
import { CityAttentionComponent } from './city-attention/city-attention.component';


@NgModule({
  declarations: [
    HomeComponent,
    CityAttentionComponent

  ],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports:[
    HomeComponent,
    CityAttentionComponent
  ]
})
export class InfoModule { }
