import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

 teamURL:string="http://localhost:3000/teams"; //adresse eli besh yemshilha fel backend
  constructor(private httpClient:HttpClient) { } //define httpclient instance
  sendReqToAddTeam(team:any, img:File){
    let formdata = new FormData();
    formdata.append('name',team.name);
    formdata.append('country',team.country);
    formdata.append('foundation',team.foundation);
    formdata.append('stadium',team.stadium);
    formdata.append('img',img);
    return this.httpClient.post<{message:string}>(this.teamURL,formdata);
  }
  sendReqToGetAllTeam(){
    return this.httpClient.get<{result}>(this.teamURL);
  }
  sendReqToGetTeamById(id){
    return this.httpClient.get<{result:any}>(`${this.teamURL}/${id}`);
  }
  sendReqToDeleteTeamById(id){
    return this.httpClient.delete(`${this.teamURL}/${id}`);
  }
  sendReqToEditTeamById(obj){
    return this.httpClient.put(`${this.teamURL}/${obj.id}`, obj);
  }
}