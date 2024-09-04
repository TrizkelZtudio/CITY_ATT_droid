import { Component, OnInit, NgZone, inject } from '@angular/core';
import { Network } from '@capacitor/network';

import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';

import { UiServiceService } from './services/ui-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  private _auth = inject(AuthService)

  netstat:any;
  StatusNet:any;

  // FESTIVE VARS
  day:any = this.datePipe.transform(Date.now(),'dd');
  moth:any = this.datePipe.transform(Date.now(),'MMMM');

  constructor(            
    private uiservice:UiServiceService,
    private datePipe: DatePipe,
    private route:Router,
    private zone: NgZone,
    
  ){  this.initializeApp();  }
    
  async ngOnInit(){  
 
    this.route.navigateByUrl('/loading');
    await this.logCurrentNetworkStatus();

  }

  
// NETWORK CONNECTION
  async logCurrentNetworkStatus(){    

    Network.addListener('networkStatusChange', status => {
      this.netstat = status;
      // console.log('Network status changed', status);
    });

    
    this.netstat = await Network.getStatus();
    if(this.netstat.connectionType == 'none'){
    this.StatusNet = 'none'
    // console.log('Network Type:', this,this.netstat.connectionType);
    }
    else if(this.netstat.connectionType == 'unknown'){ 
    this.StatusNet = 'unknown';
    // console.log('Network Type:', this.netstat.connectionType);
    }

    else if(this.netstat.connectionType == 'cellular'){
    this.StatusNet = 'cellular';
    // console.log('Network Type:', Netstatus.connectionType);
    }

    else if(this.netstat.connectionType == 'wifi'){
      this.StatusNet = 'wifi'
    // console.log('Network Type:', Netstatus.connectionType);
    }

  }

  initializeApp(){
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
          // Example url: https://beerswift.app/tabs/tab2
          // slug = /tabs/tab2
          const slug = event.url.split(".app").pop();
          if (slug) {
              this.route.navigateByUrl(slug);
          }
          // If no match, do nothing - let regular routing
          // logic take over
      });
  });
  }
}
