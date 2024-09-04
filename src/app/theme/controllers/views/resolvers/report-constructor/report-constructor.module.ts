import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ReportConstructorPageRoutingModule } from './report-constructor-routing.module';

import { ReportConstructorPage } from './report-constructor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReportConstructorPageRoutingModule
  ],
  declarations: [ReportConstructorPage]
})
export class ReportConstructorPageModule {}
