import { Component, inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-emissor-settings',
  templateUrl: './emissor-settings.page.html',
  styleUrls: ['./emissor-settings.page.scss'],
})
export class EmissorSettingsPage implements OnInit {

  private _ServForm = inject(FormsService)
  library:any = [];

  EmissorForm:FormGroup = this.fb.group({
    time_emit:    [''], 
    req_quantity: [''], 
    mirror_ok:    [''],   
    ddos_ok:      [''],   
    unic_coord:   [''], 
    end_point:    ['']
  });

  constructor(
    private fb: FormBuilder,  
    private route:Router,
    private render:Renderer2,
    private ngZone:NgZone) { }

  ngOnInit() {
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
  }

  me(){
    this.route.navigateByUrl('/dashboard/home/config/');
  }

  back(){
    this.route.navigateByUrl('/dashboard/home/config');
  }

}
