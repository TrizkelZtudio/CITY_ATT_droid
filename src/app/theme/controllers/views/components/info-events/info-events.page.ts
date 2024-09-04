import { DatePipe } from '@angular/common';
import { Component, OnInit, NgZone, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-info-events',
  templateUrl: './info-events.page.html',
  styleUrls: ['./info-events.page.scss'],
})
export class InfoEventsPage implements OnInit {

  // Report Event
  Event_ID:any;
  EventInfo:any;

  Today = this.datePipe.transform(Date.now(),'dd MMM');
  
  constructor(
              private route:Router,
              private datePipe: DatePipe,
              private nroute:ActivatedRoute,
              private render:Renderer2,
              private ngZone:NgZone) {
  }

  ngOnInit() {
    this.Event_ID = this.nroute.snapshot.paramMap.get('nevent');

    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
    

    //  ------------- Analitics -------------
  }

  home(){
    this.route.navigateByUrl('/dashboard/home');
  }

}
