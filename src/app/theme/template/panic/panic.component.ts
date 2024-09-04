import { Component, OnInit, NgZone,Renderer2, ViewChild, ElementRef, inject  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Geolocation } from '@capacitor/geolocation';


import { FunctionsService } from '../../../services/functions.service';

@Component({
  selector: 'app-panic',
  templateUrl: './panic.component.html', 
  styleUrls: ['./panic.component.scss'],
})
export class PanicComponent implements OnInit {
  
  private _functions = inject(FunctionsService)
  //  ---------- LOCAL DATA ----------
  InfoApp:any;
  countUp:number = 0;
  _door:boolean = false;


  // ---------- Intervals ----------
  timeProcess:any;
  clickToHome:any;    

  // ---------- Data Coords ----------
  UsrLoc:any;
  LoCoords:any;  


  @ViewChild('waitPan',{ static: true }) countr!: ElementRef;
  @ViewChild('infoActive', { static: true }) infActv!: ElementRef;

  constructor(
              private Actroute: ActivatedRoute,
              private router:Router,                            
              private render:Renderer2,
              private ngZone:NgZone) {
  }

  async ngOnInit() {


    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
    
    // >> Main
    this.Actroute.params.subscribe( async () => {

      this.render.removeClass( this.countr.nativeElement,'block-onx');
      this.render.removeClass( this.infActv.nativeElement,'block-onx');

      this.render.addClass( this.infActv.nativeElement,'block-offx');


      let item = this.render.selectRootElement('#seconds',true)
      this.render.setAttribute(item,'value',this.countUp.toString())  
        
    });

    this.Counter(this.countUp)
   
  }


  


  // ---------- INTERNAL PROCESS ----------
  EnndToLine(){

    let timeRedir = 2;
    if (timeRedir > 0) {

      const timeProcess2 = setInterval(()=>{
      timeRedir--;

        if(timeRedir == 0){


          this.SendOK(timeProcess2);
          
        }
      },1000);

    }
    // _____ START OperatiON_____
    this.OperatiOnProcess();
  }

  async OperatiOnProcess(){
    
        this.UsrLoc = await Geolocation.watchPosition({timeout:10000,enableHighAccuracy:true,maximumAge:10},(pos,err) =>{
            
          this.LoCoords = {
            loccoords:{
              lat:pos?.coords.latitude,
              lng:pos?.coords.longitude,
            },
            currentdate: Date.now(),
            userx:'guest'
          };
          
        });

          setTimeout( async () =>{
            if(this.UsrLoc != null){
              
              // ("_____________Deteniendo Seguimiento_____________")
              await Geolocation.clearWatch({id:this.UsrLoc});
            }

          },180000);

          // 180000 3min PROD
          // 20000  20s  DEV
  }  
  

  SendOK(timeProcess2:any){

    clearInterval(timeProcess2);
    
    this.ngZone.run( () => { 
        
      this.render.addClass( this.infActv.nativeElement,'block-onx');
      this.render.addClass( this.infActv.nativeElement,'animate__animated');
      this.render.addClass( this.infActv.nativeElement,'animate__fadeIn');
      this.render.addClass( this.infActv.nativeElement,'animate__delay-1s');

    });

    // this._functions.EmitRout(this.LoCoords); // .subscribe()

        
    this.clickToHome = setTimeout( () => {

      this.toHome(true);

    },8000);

  }



  // ---------- UTILS ----------
  Counter(contup:any) {

    if (contup <= 0) {

      this.timeProcess = setInterval( ()=>{
        contup++;
        
        let item = this.render.selectRootElement('#seconds',true)        
        this.render.setProperty(item,'innerHTML',contup)

      },1000);
      

      clearInterval(this.timeProcess);
      this.EnndToLine();
    }

  }
  
  // ---------- ROTES ----------
  CancelLine(){
    
    this.router.navigateByUrl('/dashboard/home');
    // CODIGO DE CANCELACION DE EMISION

  }
  toHome( event:any){
    // clear all Timers proceess
    clearInterval(this.timeProcess);
    clearInterval(this.clickToHome);

    if(event.isTrusted == true || event == true){

      // console.log("THE_CLICK: ",event.isTrusted);
      this.router.navigateByUrl('/dashboard/home');

    }
  }


}
