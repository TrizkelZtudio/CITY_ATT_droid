import { Component, OnInit, Renderer2, NgZone, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { SocketService } from '../../services/socket.service';
import { StorageService } from 'src/app/services/storage.service';

import { GetInfo } from '../../services/get-info.service';
import { UiServiceService } from '../../../services/ui-service.service';


// import { TimeAgoPipe } from 'ngx-pipes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})

export class HomeComponent implements OnInit {

  private _lainfo = inject(GetInfo)
// Actulizacion prox en Ventanas y más
// ___ INITIALS ____
  Nkusrname:any = localStorage.getItem('nkname');
  ROLUO:any;

  goto:any;  //condicionar

  NewsTitle:any;

  Today = this.datePipe.transform(Date.now(),'dd MMM');

  constructor(private route:Router,
              private Acroute:ActivatedRoute,
              private datePipe: DatePipe,
              private ui:UiServiceService,
              private render:Renderer2,
              private ngZone:NgZone       
              ){}

  ngOnInit(){ 
    // ___________________ INITIALS ___________________
    this.Acroute.params.subscribe( async () => {

      this.navbar();
    });
    
    this.HomeChanels();
    this.Usr_PreLoad();

  
  }


  // ------------- CONNECTIONS -------------
  // >> PRELOAD
  Usr_PreLoad(){

    this.UpgradeInfo();  

  }


  // >> Push Info
  HomeChanels(){

  }

  // >> Storage Update
  UpgradeInfo(){

    this._lainfo.Novedades()
  }


  // ------------- HOME ROUTES ------------- 
  HomeRouter(rutes:any,go_to?:any){
    
    if(rutes == 'config'){
      this.route.navigate(['/dashboard/home/config']);
    }
    if(rutes == 'home_form'){
      this.route.navigate(['/dashboard/home/frstform']);
    }
    if(rutes == 'infrom'){ 
      this.route.navigate(['/dashboard/home/from']);
    }
    if(rutes == 'mapas'){
      this.route.navigate(['/dashboard/home/mapas']);
    }
    if(rutes == 'news'){
      this.route.navigate(['/dashboard/home/paper',go_to])   
    }
    if(rutes == 'in_evnt'){
      this.route.navigate(['/dashboard/home/wsemit',go_to])       
    }
 
  }

 
  // ------------- INTERNAL -------------
  navbar(){

      this.ngZone.run(()=>{
        let tab = this.render.selectRootElement('.navigation-tab',true)
        
        this.render.setStyle(tab,'display','flex')
      });
  }

  shareInfo(title:any,txt:any,url?:any,tag?:any){

    this.ui.ShareFunc(title,txt,url,tag);
  }

 

  // ------------- PLUGINS -------------
  Agent_PreLoad(){
    console.log('iniciando jornada');
  }
}
