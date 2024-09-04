import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microphone',
  templateUrl: './microphone.page.html',
  styleUrls: ['./microphone.page.scss'],
})
export class MicrophonePage implements OnInit {

  today:any = this.datePipe.transform(Date.now(),'short');
  
  FileIMG:any;
  image:any;
  oleMsg:any;

  MediaForm:FormGroup = this.fb.group({
    photo:[''],
    reference: ['']

  });

  constructor(
              private routes:Router,
              private fb: FormBuilder,
              private datePipe: DatePipe,
              private render:Renderer2,
              private ngZone:NgZone) { }

  ngOnInit() {
  }

  sendReport(){

    
    if(!this.MediaForm.valid){
      this.oleMsg = "Requerimos de más detalles";
    }
    else {
      let sended = this.render.selectRootElement('#sendclass',true);
      let succok = this.render.selectRootElement('#succok',true);
  
      alert('Enviado!')
      this.routes.navigateByUrl('/dashboard/home');
    }
  
    }

}
