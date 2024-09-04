import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {


  _ROLUO:any;

  constructor(private Acroute:ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.Acroute.params.subscribe( () =>{
      this._ROLUO = localStorage.getItem('roluo');
    })
  }

}
