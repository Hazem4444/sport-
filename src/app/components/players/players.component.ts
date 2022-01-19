import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab:any;
  constructor() { }

  ngOnInit() {
    this.playersTab =[
      {id:1,avatar:"assets/images/img_1.jpg",name:"Messi",age:'29ans', nbr:' 1',note:'1'},
      {id:2,avatar:"assets/images/img_2.jpg",name:"Hannibal",age:'30ans', nbr:' 3',note:'9'},
      {id:3,avatar:"assets/images/img_3.jpg",name:"Khnissi",age:'39ans', nbr:' 5',note:'4'},
      {id:4,avatar:"assets/images/img_1.jpg",name:"Chaaleli",age:'32ans', nbr:' 8',note:'10'}
   
    
    
      
    ]
  }

}
