import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {

  id: any;
  team: any;
  constructor(
    private teamService: TeamService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.teamService.sendReqToGetTeamById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.team = data.result;
      }
    );
  }

}
