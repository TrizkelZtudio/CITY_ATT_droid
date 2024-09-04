import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

 
  constructor(
            private render:Renderer2,
            private ngZone:NgZone,
            private Acroute: ActivatedRoute,
          ) { }

  ngOnInit() {
    this.Acroute.params.subscribe( async () => {

      this.ngZone.run(()=>{
        let tab = this.render.selectRootElement('.navigation-tab',true)
        
        this.render.setStyle(tab,'display','none')
      });
    })
  }

}
