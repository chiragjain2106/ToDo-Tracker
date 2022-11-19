import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public addUser(user: User){
    return this.http.post("http://localhost:9000/api/v2/register",user,{responseType:'text' as 'json'});
  }

  public updateUser(user: User,email: string){
    return this.http.post("http://localhost:9000/api/v2/update/"+email,user,{responseType:'text' as 'json'});
  }

  public getUser(email: string){
    return this.http.get("http://localhost:9000/api/v2/findUser/"+email);
  }

  
  public updatePassword(newPassword:any,email: any,oldPassword:any){
    return this.http.put("http://localhost:9000/api/v1/updatePassword/"+email+"/"+oldPassword+"/"+newPassword,{responseType:'text' as 'text'});
  }

}
