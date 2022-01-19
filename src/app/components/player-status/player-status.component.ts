import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  result:any;
  status:any={};
  statusForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.statusForm= this.formBuilder.group({
      height:[''],
      weight:['']
    })
  }
  calculer(){
    console.log("status", this.status);

    this.playerService.sendReqStatusPlayer(this.status).subscribe(
      (data)=>{

     console.log("Here Message from BE", data.message);
     console.log("Here IMC from BE", data.imc);
     this.result = data;
    }

    );
  }
}
