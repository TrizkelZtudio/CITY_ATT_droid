import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  
  private baze: string = environment.baze;

  constructor(private http:HttpClient) {  
  }

  GetFrom(){
    const urele ='https://gaia.inegi.org.mx/wscatgeo/v2/mgee/'
    return this.http.get(urele);
  }

  EmitRout(payload:any) {
      const url = `${this.baze}/service/emit`;
      return this.http.post(url,payload);

    }
  MyExternals(lat:any,lng:any) {
    const url = `${this.baze}/service/sms`;
  
    return this.http.get(url,{
      params:{
        'lat':lat,
        'lng':lng, 
      }
    });
  }  

} 
