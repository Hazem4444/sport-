import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  id: any;
  player: any;
  constructor(
    private playerService: PlayerService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.playerService.sendReqToGetPlayerById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.player = data.result;
      }
    );
  }

}
