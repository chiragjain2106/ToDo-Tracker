import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  userEmail!: string;

  constructor(private http:HttpClient) { }

    //LOGIN
    loginUser(user: any): Observable<any> {
      const url = 'http://localhost:9000/api/v1/login/';
      this.userEmail = user.email;
      return this.http.post<any>(url, user);
    }
  
    //calling the server to get token
    generateTokenUsingLogin(credentials:any){
      //generate token
      return this.http.post(`http://localhost:9000/api/v1/login`,credentials);
    }
  
  // for login user
    loginUserToken(token: string){
      sessionStorage.setItem("token",token);
      return true;
    }
  
    //to check if user is logged in or not
    isLoggedIn(){
      let token=sessionStorage.getItem("token");
      if(token===''|| token==undefined || token==null){
        return false;
      }else{
        return true;
      }
    }
  
    //for getting the token
    public getToken(){
      sessionStorage.getItem("token");
    }
  
    //for logout
    logout(){
      sessionStorage.removeItem("token");
      return true;
    }
}
