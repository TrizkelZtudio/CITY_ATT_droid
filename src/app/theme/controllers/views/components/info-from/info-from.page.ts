import { Component, inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-info-from',
  templateUrl: './info-from.page.html',
  styleUrls: ['./info-from.page.scss'],
})
export class InfoFromPage implements OnInit {

  private _Info = inject(FunctionsService)

  ladata:any;

  constructor(private routes: ActivatedRoute,
              private render:Renderer2,
              private ngZone:NgZone
  ) { }

  ngOnInit() {
    this.routes.params.subscribe( async () => {
      this.ngZone.run(()=>{
        let tab = this.render.selectRootElement('.navigation-tab',true)
        
        this.render.setStyle(tab,'display','none')
     });
    })

    this._Info.GetFrom().subscribe((resp:any) => {

      this.ladata = resp.datos;
    });
  }

  get laInfo(){
    return this.ladata
  }

}
