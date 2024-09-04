import { LOCALE_ID, NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpCacheInterceptorModule, useHttpCacheLocalStorage } from '@ngneat/cashew';

import { DatePipe } from '@angular/common';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { IonicStorageModule } from '@ionic/storage-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {NgPipesModule} from 'ngx-pipes';



@NgModule({
  
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgPipesModule,
    LeafletModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp( {
      'appId':'1:1036716279648:android:xxxxxxxxxx',
      'projectId':'project-name'
    } )),
    provideFirestore(() => getFirestore()),
    IonicStorageModule.forRoot({
      name:'CTATT_DB',
      storeName:'Data-x',
      version:2.5
    })
  ],

  providers: [
    DatePipe,
    useHttpCacheLocalStorage,
    {
       provide: RouteReuseStrategy,
       useClass: IonicRouteStrategy
    },
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
