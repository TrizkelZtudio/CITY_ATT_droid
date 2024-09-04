import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import anime from 'animejs/lib/anime.es.js';

import { StorageService } from 'src/app/services/storage.service';
import { UiServiceService } from 'src/app/services/ui-service.service';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  logoAnimation:any; 
  version:any;

  constructor(private router:Router,
              private Actroute: ActivatedRoute,
              private storage:StorageService,
              private ui:UiServiceService,
              private render:Renderer2) {                
  }
  
  ngOnInit() {  

    this.Actroute.params.subscribe( async () => {

      this.logoanimation();   
 
    });   
   
  }
 

  logoanimation(){

    const logoAnimation = anime.timeline({
      autoplay: true,
      delay: 400
    });
  
  logoAnimation
      .add({
          targets: "#logo",
          translateY: [-100, 0],
          opacity: [0, 1],
          elasticity: 5000,
          duration: 1000,
          offset: 0
      })
      .add({
          targets: "#logo",
          translateX: [0, -100],
          duration: 700,
          easing: "easeOutExpo",
  
      })
      .add({
          targets: "#logo-hexagon",
          duration: 0,
          elasticity: 0,
      })
      .add({
          targets: "#logo-text",
          translateX: ["-100%", 0],
          opacity: [0, 1],
          duration: 600,
          easing: "easeOutExpo",
      })
      .add({
          targets: "#ft-animate",
          opacity: [0, 1],
          duration: 700,
          easing: "easeOutExpo",
      });

    this.launchToHme();
  }
  
  launchToHme(){    
    
      setTimeout(()=>{
        this.router.navigateByUrl('/dashboard/guest'); 
  
        let item = this.render.selectRootElement('#cessamo',true)
        
        this.render.setAttribute(item,'class','back blue-back')        
      },5000)
  }

}
 