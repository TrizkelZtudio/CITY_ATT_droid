import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError,map,tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



import { StorageService } from '../../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private baseUrl: any = environment.baseUrl;
  private fire: string = environment.notify;
  

  constructor(private http:HttpClient,private storage:StorageService) { }

  login(tzxformData:any){

    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url,tzxformData)
    .pipe(
      tap(resp => {
        if(resp){
          localStorage.setItem('key_tkn',resp.token!);
          localStorage.setItem('ide',resp.ids!);                            
        }
      }),
      map(resp => resp),
      catchError(err => of(err.error.msg))
    );

  }
  register(name:any){

    const url = `${this.baseUrl}/register`;
    return this.http.post<any>(url,name)
    .pipe(
      tap(resp => {
          this.logout();
          localStorage.setItem('ide',resp.ids!);
        }
      ),
      map(resp => resp),
      catchError(err => of(err.error.msg))      
    );
  }
  FirebaseRegister(name:any){

    const url = `${this.fire}/register`;
    return this.http.post<any>(url,name)
    .pipe(
      tap(resp => true),
      map(resp => resp),
      catchError(err => of(err.error.msg))      
    );
  }

 
  resetCont(ident:any){

    const url = `${this.baseUrl}/forget`;

    return this.http.post<any>(url,ident)
    .pipe(      
      map(resp => resp),
      catchError(err => of(err.error.msg))
    );
  }

  logout(){
    localStorage.clear();
  }

}
