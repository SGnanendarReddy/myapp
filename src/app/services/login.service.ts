import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
  
  postlogin(login:any):Observable<any>
  {
    return this.httpclient.post("http://localhost:3000/signupUsersList",login)
  }



}
