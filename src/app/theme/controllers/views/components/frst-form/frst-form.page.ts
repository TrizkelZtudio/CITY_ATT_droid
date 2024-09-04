import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frst-form',
  templateUrl: './frst-form.page.html',
  styleUrls: ['./frst-form.page.scss'],
})
export class FrstFormPage implements OnInit {
  
  
  FileIMG:any;
  image:any;

  oleMsg:any;
  

  FrstForm:FormGroup = this.fb.group({
    titulo:    [''], 
    referencias: [''], 
    edad: [''], 
    urele: ['']
  });

  constructor(
    private routes: ActivatedRoute,
    private fb: FormBuilder,  
    private route:Router,
    private render:Renderer2,
    private ngZone:NgZone) { }

  ngOnInit() {
    this.routes.params.subscribe( async () => {
      this.ngZone.run(()=>{
        let tab = this.render.selectRootElement('.navigation-tab',true)
        
        this.render.setStyle(tab,'display','none')
     });
    })
  }
  sendForm(){

  }



  
  me(){
    this.route.navigateByUrl('/dashboard/home/config/');
  }

  back(){
    this.route.navigateByUrl('/dashboard/home/config');
  }

}
