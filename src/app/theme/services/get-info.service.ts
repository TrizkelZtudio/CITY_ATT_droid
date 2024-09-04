import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError,tap } from 'rxjs/operators';
// import { Noticiero,Eventos,Alertas } from '../interfaces/info-interfaces'


@Injectable({
  providedIn: 'root'
})
export class GetInfo {
 
  private baze: string = environment.baze; 

  constructor(private http:HttpClient) { }


  Novedades(){
    const url = `${this.baze}/news`;

    return this.http.get<any>(url,
    //   {
    //   headers:{
    //     'tzsson':token,        
    //   }
    //  }
    )
    .pipe(
      tap(resp => true),
      catchError(err => of(err.error.msg))
    );
  }

  Eventos(){
    const url = `${this.baze}/events`;

    return this.http.get<any>(url)
    .pipe(
      tap(resp => true),
      catchError(err => of(err.error.msg))
    ); 
  }

  GetFiles(){
    const url = `${this.baze}/files`;
    
    return this.http.get<any>(url)
    .pipe(
      tap(resp => true),
      catchError(err => of(err.error.msg))
    ); 
  }

}
