import { Component,ViewChild } from '@angular/core';

import { IonInfiniteScroll } from '@ionic/angular';

import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  // Reception
  page:number = 1;

  constructor( private storage:StorageService) 
              { }

  loadData(event:any){
    
    this.page ++;      

    // console.log('Page:',this.page);

    

      // this.city.MyReports(this.page).subscribe((resp) => {             
    
      //   setTimeout(async() => {
      //   const datos = resp.usrList;

      //   if(datos.length == 0){
          
      //     event.target.complete();
      //     event.target.disabled = true;
      //     return;
          
      //   }
      //   else{
          
      //     await datos.forEach( (e:any) => {
            
      //       console.log(`Page ${this.page}` + '| Data:',e);

      //       this.storage.saveReports(e,true);          
      //       event.target.complete();
      //       event.target.disabled = true;
      //     });
      //   }
      // },1000)

      // });                
  }
}
