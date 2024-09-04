import { Component, OnInit,Renderer2, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-city-attention',
  templateUrl: './city-attention.component.html',
  styleUrls: ['./city-attention.component.scss'],
})
export class CityAttentionComponent implements OnInit {

  // Revision de Infinite SCroll  in TAB 2 (doble peticion)
  Segments:string = 's1';

  Viewxreports:any;
  page:number = 1;

  constructor(private router:Router,
              private Acroute:ActivatedRoute,
              private render:Renderer2,
              private ngZone:NgZone)
              {  }

  ngOnInit() {
        
    //  Reset
    this.PurgeLists();
    

    this.Acroute.params.subscribe( () => {
      this.navbar();    
    });
   
       
    // BOX - content
    if(this.Viewxreports.length == 0){  
      this.FrstData();
    } 
  }


  FrstData(){    
   
      // this.city.MyReports(this.page).subscribe( resp:any => {
      //   if(resp){
      //     let datos = resp.usrList;

      //     datos.forEach( (e:any) => {

      //       // console.log("Initial: ",e);
      //       this.storage.saveReports(e);          
      //     });

      //     this.showRepo();         
      //   }
      // });
    
  }

  PurgeLists() {
    this.Viewxreports = [];
  }

// ROUTES

  segment(val:string){
    this.Segments = val;
  }

  newMedia(){
    this.router.navigateByUrl('/dashboard/media/mkmedia');
  }
  WatchDetails(go_to:any){
    // console.log("ID_Report:",go_to);
    this.router.navigate(['/dashboard/media/details/',go_to]);
  }

  // TOOLS
  navbar(){
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','flex')
    });
  }

}
