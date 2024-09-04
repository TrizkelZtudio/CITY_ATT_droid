import { inject, Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Device } from '@capacitor/device';
import { Share } from '@capacitor/share';


@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  
  
  private fire: string = environment.notify;
  private baze: string = environment.baze; 
  private author: string = environment.author; 

  public Versions:any;

  constructor(private http:HttpClient){     
  }


  async ShareFunc(title:any,txt:any,url:any,dialog:any){
    const info = await Device.getInfo();
    if(info.platform == 'android' || info.platform == 'ios' ){ 
      
      Share.canShare().then( async (result) =>{
        if(result){
  
          await Share.share({
            title: title,
            text: txt,
            url: url,
            dialogTitle: dialog,
          });
        }
      });
    }
  }
  
  

  CheckVersions(){
     
    const url = `${this.author}/trizkelzt/version`;
    
    return this.http.get<any>(url)
    .pipe(
      map(resp => resp),
      catchError(err => of(err.error.msg))
    ); 
  }
}
