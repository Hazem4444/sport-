import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  Teams:any;
  constructor() { }

  ngOnInit() {
    this.Teams =[
      {id:1,Logo:"assets/images/logo_1.png",TeamName:"Coupe d'Arabe",Foundation:'1998', Country:'Country 1', Date:"15:30 AM GMT+0"},
      {id:2,Logo:"assets/images/logo_2.png",TeamName:"Coupe de Monde",Foundation:'1980', Country:'Country 2', Date:"9:00 AM GMT+0"},
      {id:3,Logo:"assets/images/logo_3.png",TeamName:"Coupe d'Afrique",Foundation:'1965', Country:'Country 3', Date:"8:30 AM GMT+0"},
      {id:4,Logo:"assets/images/logo_4.png",TeamName:"Coupe d'Arabe",Foundation:'1902', Country:'Country 4', Date:"11:30 AM GMT+0"}
   
    
    
      
    ]
  }

}
