import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclient: HttpClient) { }

  authorizeUser(user:any): Observable<any>{ 
    return this.httpclient.post<any>('http://localhost:3000/auth/v1',user);
  }


  setToken(token:any){
    localStorage.setItem("bearerToken",token);
  }

  getToken(): any{
    return localStorage.getItem("bearerToken");
  }
  isValid(token:any): Promise<any>{
    let bearer="Bearer "+token;
    return this.httpclient.post<any>('http://localhost:3000/auth/v1/isAuthenticated',{},{
      headers: new HttpHeaders().set('Authorization',bearer)
    }).toPromise();
  }
}
