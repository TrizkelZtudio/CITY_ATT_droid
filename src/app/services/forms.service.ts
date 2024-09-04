import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsService {


  agenda:any;
  private baze: string = environment.baze; 

  constructor(private http:HttpClient) { }

  setAgents(data:any){

    this.agenda = data;
  }


  get Agents(){
    return this.agenda;
  }

  anunRegister(data:any){ 
    const url = `${this.baze}/service/forms`;
    

    return this.http.post<any>(url,data)
    .pipe(
      tap(resp => true),
      catchError(err => of(err.error.msg))
    ); 
  }

  contactUS(data:any){
    const url = `${this.baze}/service/ztudio`;
    

    return this.http.post<any>(url,data)
    .pipe(
      tap(resp => true),
      catchError(err => of(err.error.msg))
    ); 
  }



  

}
