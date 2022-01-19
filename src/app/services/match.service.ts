import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 matchURL:string="http://localhost:3000/api/matches"; //adresse eli besh yemshilha fel backend
  constructor(private httpClient:HttpClient) { } //define httpclient instance
  sendReqToAddMatch(matchObj){
    return this.httpClient.post<{message:string, result:any}>(this.matchURL, matchObj);
  }
  sendReqToGetAllMatch(){
    return this.httpClient.get<{result:any,message:string}>(this.matchURL);
  }
  sendReqToGetMatchById(id){
    return this.httpClient.get<{result:any}>(`${this.matchURL}/${id}`);
  }
  sendReqToDeleteMatchById(id){
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }
  sendReqToEditMatchById( obj){
    return this.httpClient.put<{message}>(`${this.matchURL}/${obj._id}`, obj);
  }
  searchByTeamOne(obj){
    return this.httpClient.get(`${this.matchURL}/${obj.teamOne}`)
  }
}
