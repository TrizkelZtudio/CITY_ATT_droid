import { Component, OnInit ,Renderer2, NgZone, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage  {

  private _ServForms = inject(FormsService)
  public mssg:any;
  today:any = this.datePipe.transform(Date.now(),'short');

  Comments:FormGroup = this.fb.group({
    affair:  ['',[Validators.required,Validators.minLength(3)]],
    comment: ['',[Validators.required,Validators.minLength(3)]],
    fecha:[this.today]  
  });


  constructor(private fb: FormBuilder,
              private routes:Router,
              private location: Location,
              private datePipe: DatePipe,
              private render:Renderer2,
              private ngZone:NgZone) { }

  ngOnInit() {
    this.ngZone.run(()=>{
      let tab = this.render.selectRootElement('.navigation-tab',true)
      
      this.render.setStyle(tab,'display','none')
    });
  }              

  comenta(){

    if(this.Comments.invalid){      
      return;
    } 
    else{ 
      // this.usrForms.Comentario(this.Comments.value).subscribe
        this.routes.navigateByUrl('/dashboard/more/settings');

    }

  }

  backto(){
    this.location.back();
  }
}
 