import { Component, OnInit, NgZone, Renderer2 } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public logoLogin:any;
  public formSubmitted:any;
  public label = false;
  public mssg:any;

  public LogForm:FormGroup = this.fb.group({
    usr_app:  [localStorage.getItem('username') || '' ],
    pass_app: ['']
  });

  constructor(private fb: FormBuilder,
              private router:Router,
              private auth:AuthService,
              private render:Renderer2,
              private ngZone:NgZone) {
  }

  ngOnInit(): void {
    this.logoLogin = document.querySelector("#LOGO-login");
  }





  look(){
    const show = this.render.selectRootElement('#password-login',true);    

    if(show.type == 'password'){
      this.ngZone.run(()=>{

        this.render.setProperty(show,'type','text');
      });
    }
    else if (show.type == 'text'){
      this.ngZone.run(()=>{

        this.render.setProperty(show,'type','password');
      });
    }
  }

  logokey() {
    (this.logoLogin.style.paddingTop = "18px"),
    (this.logoLogin.style.transform = "scale(0.8,0.8)");
  }
 
  logores() {
      (this.logoLogin.style.paddingTop = "120px"),
      (this.logoLogin.style.transform = "scale(1,1)");
  }

  inn(){

    this.formSubmitted = true;

    localStorage.clear();

    this.auth.login(this.LogForm.value).subscribe( resp => {

        if(resp.token){            
          
          this.label = false;
          localStorage.setItem('key_tkn',this.LogForm.get('usr_app')?.value);
          this.router.navigateByUrl('/splash');
        }
        else if(resp){
          this.label = true;
          this.mssg = resp;

          this.router.navigateByUrl('/auth');
        }


    });
  }

  privacy(){
    
    window.location.href = "https://github.com/TrizkelZtudio/CITY_ATT_droid/blob/main/LICENSE";
    
  }

}
