import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  players:any;
  constructor(
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.playerService.sendReqToGetAllPlayer().subscribe(
      (data)=>
      {this.players= data.result}

    );
   
  }
  goToDisplayPlayer(x) {
    this.router.navigate([`displayPlayer/${x}`]);
  }
  goToEditPlayer(x){
    this.router.navigate([`editPlayer/${x}`]);
  }
}
