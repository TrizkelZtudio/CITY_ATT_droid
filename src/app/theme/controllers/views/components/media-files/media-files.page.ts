import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-files',
  templateUrl: './media-files.page.html',
  styleUrls: ['./media-files.page.scss'],
})
export class MediaFilesPage implements OnInit {

  constructor(
    private route:Router,
    private render:Renderer2,
    private ngZone:NgZone) { }

  ngOnInit() {
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
  }

  home(){
    this.route.navigateByUrl('/dashboard/media');
  }
  ToCategory(cat:string){
    
    if(cat == 'audio'){
      this.route.navigate(['/dashboard/media/mkmedia/audio']);
    }    
    if(cat == 'blueth'){
      this.route.navigate(['/dashboard/media/mkmedia/transmission']);
    }
    if(cat == 'camera' || cat == 'files'){
      this.route.navigate(['/dashboard/media/mkmedia',cat]);
    }
    
  }

}
