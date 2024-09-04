import { DatePipe } from '@angular/common';
import { Component, OnInit, NgZone,Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-info-news',
  templateUrl: './info-news.page.html',
  styleUrls: ['./info-news.page.scss'],
})
export class InfoNewsPage implements OnInit {

  News_ID:any;
  NewsInfo:any;

  NewsItem:any[] = [];
  Today = this.datePipe.transform(Date.now(),'dd MMM');

  constructor(private route:ActivatedRoute,
              private datePipe: DatePipe,
              private route2:Router,
              private render:Renderer2,
              private ngZone:NgZone){
  }

  ngOnInit() {
    this.News_ID = this.route.snapshot.paramMap.get('nnew');    
    
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });

  }


  home(){
    this.route2.navigateByUrl('/dashboard/home');
  }
}
