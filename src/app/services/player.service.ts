import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string="http://localhost:3000/players"; //adresse eli besh yemshilha fel backend
  constructor(private httpClient:HttpClient) { } //define httpclient instance
  sendReqToAddPlayer(playerObj){
    return this.httpClient.post(this.playerURL, playerObj);
  }

  
  sendReqStatusPlayer(playerObj){
    return this.httpClient.post<{imc:string, message:string}>(`${this.playerURL}/status`, playerObj);
  }



  sendReqToGetAllPlayer(){
    return this.httpClient.get<{result:any}>(this.playerURL);
  }
  sendReqToGetPlayerById(id){
    return this.httpClient.get<{result:any,message:string}>(`${this.playerURL}/${id}`);
  }
  sendReqToDeletePlayerById(id){
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  sendReqToEditPlayerById(obj){
    return this.httpClient.put<{result:any, message:string}>(`${this.playerURL}/${obj.id}`, obj);
  }
}
