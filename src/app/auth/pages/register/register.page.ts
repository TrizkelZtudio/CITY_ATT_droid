import { Component, OnInit,NgZone,Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';

import { passwordStrength } from 'check-password-strength'
import { AuthService } from '../../services/auth.service';


import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formSubmitted  = false;
  public msg:any;
  public label = false;

  showdate:any
  todOk:any;
  countDown:number = 2;

  today:any = this.datePipe.transform(Date.now(),'short');

  async dateChanged(event:any){
    // let item = this.render.selectRootElement('#time-button ',true)
    // this.render.setProperty(item,'style','background-color: #9f2241');
    
    let datePick = event.detail.value;
    
    datePick = this.datePipe.transform(datePick,'dd/MMM/YYYY');

    // datePick = moment(datePick).format('L');
    this.showdate = await datePick;
    console.log("THIS_DATE_RESULT: " ,datePick);
    this.Formularioregistrazione.get('birthday')?.setValue(datePick);
  }

  Formularioregistrazione:FormGroup = this.fb.group({
    usr_app: ['',Validators.required],    
    pass_app: ['',[Validators.required,Validators.minLength(6)]],
    passconfirm: ['',[Validators.required,Validators.minLength(6)]],
    ilphono:['',Validators.minLength(10)],
    // birthday:['',Validators.required],
    created:[this.today]
  });
  
  constructor(private router: Router,
              private datePipe: DatePipe,
              private fb: FormBuilder,
              private auth:AuthService,
              private render:Renderer2,
              private ngZone:NgZone) {
  }
  ngOnInit(): void {

 
    document.querySelector('#wook')?.setAttribute('class','block-offx content-REG');

   
    var enviarbtn = <HTMLInputElement> document.getElementById("rgbtn");


    $(document).on("keyup", "#password-register", function () {
      var value = $(this).val();
      document.getElementById("password-validator")?.classList.add("mostrar");
      $("#password-validator li").each(function () {
        var reg = new RegExp($(this).data("val-regex"));
        $(this).removeClass("valid").removeClass("error");
        if (reg.test(value as string)) {
          $(this).addClass("valid");

        } else {
          $(this).addClass("error");

        }
      });
      if ((<any>$("#password-validator li.error")).size == 0) {
        $("#password-input-group").addClass("correct");
      } else {
        $("#password-input-group").removeClass("correct");
      }
    });


    $(document).on("keyup", "#ilphono", function () {
      var value = $(this).val();


      this.document.getElementById("pwval").classList.add("mostrar");
      $("#pwval span").each(function () {
        var reg = new RegExp($(this).data("val-regex"));
        $(this).removeClass("valid").removeClass("error");
        if (reg.test(value as string)) {
          $(this).addClass("valid");
          document.getElementById("pwval")?.classList.remove("mostrar");

        } else {
          $(this).addClass("error");

        }
      });
      if ((<any>$("#pwval span.error")).size == 0) {
        $("#pwval").addClass("correct");
      } else {
        $("#pwval").removeClass("correct");
      }
    });





    $(document).on("keyup", "#password-confirm", function () {

      this.pass1 = document.getElementById('password-register');
      this.pass2 = document.getElementById('password-confirm');

      if(this.pass1.value != this.pass2.value) {
        this.document.getElementById("err").classList.add("mostrar");
        return false;
      }else{
        // Si las contraseñas coinciden ocultamos el mensaje de error
        this.document.getElementById("error").classList.remove("mostrar");

        // Mostramos un mensaje mencionando que las Contraseñas coinciden
        this.document.getElementById("ok").classList.remove("ocultar");

        // Desabilitamos el botón de login
        this.document.getElementById("login").disabled = true;

        // Refrescamos la página (Simulación de envío del formulario)
        setTimeout(function() {
            location.reload();
        }, 3000);

        return true;
      }
    });







  }

  calendar(){
    const btn = this.render.selectRootElement('#datetime')
    if(btn.style.display == 'block'){

      this.render.setProperty(btn,'style','width: 80%;transform: scale(1);display:none;position: absolute;z-index: 80;')
    }
    else if(btn.style.display == 'none'){

      this.render.setProperty(btn,'style','width: 80%;transform: scale(1);display: block;position: absolute;z-index: 80;')
    }
  }

  register(){

    //ADD INFO CARD
      const { usr_app } = this.Formularioregistrazione.value;
      const outmail2 = usr_app.toLowerCase().replace(/ /g,"");

      this.Formularioregistrazione.get('usr_app')?.setValue(outmail2);

      if(usr_app.includes(" ")){

        return;
      }

      else{
        this.formSubmitted = true;
        

        // Textos
        this.auth.register(this.Formularioregistrazione.value).subscribe(resp => {

            if(resp.token){

              this.label = false;
              setTimeout(()=>{
                
                document.querySelector('.content-REG')?.setAttribute('class','block-offx content-REG animate__animated animate__fadeOut animate__delay-1s');
                document.querySelector('#wook')?.setAttribute('class','block-onx animate__animated animate__fadeIn animate__delay-1s')
                this.Formularioregistrazione.reset();

                  const continter = setInterval(() => {
 
                    this.countDown--;
                    document.querySelector('#wook')?.setAttribute('class','block-offx animate__animated animate__fadeOut animate__delay-1s');
                    this.router.navigateByUrl('/splash');
                    clearInterval(continter);

                  },1000);

              },1000);
            }
            else if(resp){
              this.label = true;
              this.msg = resp;
              
            }
        });

      }
  }

  Viewchange(){
    this.router.navigateByUrl('/splash');
  }

  campoNoValido(){
    const { pass_app } = this.Formularioregistrazione.value;

    if(passwordStrength(pass_app).length <= 0){
      document.querySelector('#slw')?.setAttribute('class','point strength ');
      document.querySelector('#medum')?.setAttribute('class','point strength');
      document.querySelector('#strng')?.setAttribute('class','point strength');


    }
    else if(passwordStrength(pass_app).value == 'Too weak'){

      document.querySelector('#slw')?.setAttribute('class','point strength-0');
      document.querySelector('#medum')?.setAttribute('class','point strength');
      document.querySelector('#strng')?.setAttribute('class','point strength');
      // console.log('To Weak');
    }
    else if(passwordStrength(pass_app).value == 'Weak'){

      document.querySelector('#slw')?.setAttribute('class','point strength-0');
      document.querySelector('#medum')?.setAttribute('class','point strength-0');
      document.querySelector('#strng')?.setAttribute('class','point strength');
      // console.log('Weak');
    }
    else if(passwordStrength(pass_app).value == 'Medium'){

      document.querySelector('#slw')?.setAttribute('class','point strength-2');
      document.querySelector('#medum')?.setAttribute('class','point strength-2');
      document.querySelector('#strng')?.setAttribute('class','point strength-2');
      // console.log('Medium');
    }
    else if(passwordStrength(pass_app).value == 'Strong'){

      document.querySelector('#slw')?.setAttribute('class','point strength-2');
      document.querySelector('#medum')?.setAttribute('class','point strength-2');
      document.querySelector('#strng')?.setAttribute('class','point strength-2');
      // console.log('Strong');
    }

  }

  showPass(){

    const show = this.render.selectRootElement('#password-register',true);    
    const INP2 = this.render.selectRootElement('#password-confirm',true);    

    if(show.type == 'password'){
      this.ngZone.run(()=>{

        this.render.setProperty(show,'type','text');
        this.render.setProperty(INP2,'type','text');
        
      });
    }
    else if (show.type == 'text'){
      this.ngZone.run(()=>{

        this.render.setProperty(show,'type','password');
        this.render.setProperty(INP2,'type','password');
      });
    }
  }

  backto(){
    this.router.navigateByUrl('/dashboard/home');

  }

}
