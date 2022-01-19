import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/api/users"; //adresse eli besh yemshilha fel backend
  constructor(private httpClient: HttpClient) { } //define httpclient instance
  sendReqToSignup(userObj) {
    return this.httpClient.post<{message:string}>(`${this.userURL}/signup`, userObj);
  }

  sendReqToGetProfil(id) {
    return this.httpClient.get<{result:any,message:string}>(`${this.userURL}/${id}`);
  }

  sendReqToEditProfilById(obj: any) {
    return this.httpClient.put(`${this.userURL}/${obj.id}`, obj);
  }
  login(user) {
    return this.httpClient.post<{result:any}>(`${this.userURL}/login`, user);
  }
  getAllUsers(){
    return this.httpClient.get<{result:any ,message:string}>(this.userURL);
  }
}
