import { Component, OnInit,Renderer2,NgZone, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  private _ServForms = inject(FormsService)
  Nkusrname:any;

  mailUsr:any;
  _ROLUO:any;

  constructor(private route:Router,
              private Actroute: ActivatedRoute,
              private render:Renderer2,
              private ngZone:NgZone) {   }

  ngOnInit() {
    
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)      
      this.render.setStyle(tab,'display','none')
    });

    this.Actroute.params.subscribe( par => {

      this.InitDat();
    });
  }
  

  InitDat(){

  } 

  panicSett(){

    this.route.navigateByUrl('/dashboard/home/config/ilemissor');

  }
  about(){
    this.route.navigateByUrl('/dashboard/home/config/about');
  }
  comments(){
    this.route.navigateByUrl('/dashboard/home/config/comments');
  }
  legal(){
    window.location.href = "https://github.com/TrizkelZtudio/CITY_ATT_droid/blob/main/LICENSE";
  }

  back(){
    this.route.navigateByUrl('/dashboard/home');
  }
}
