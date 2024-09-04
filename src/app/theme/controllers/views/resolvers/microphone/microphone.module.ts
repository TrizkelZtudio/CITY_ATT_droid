import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicrophonePageRoutingModule } from './microphone-routing.module';

import { MicrophonePage } from './microphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MicrophonePageRoutingModule
  ],
  declarations: [MicrophonePage]
})
export class MicrophonePageModule {}
