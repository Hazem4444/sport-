import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  Teams: any
  constructor(
    private teamService: TeamService,
    private router: Router) { }

  ngOnInit() {

    this.teamService.sendReqToGetAllTeam().subscribe(
      (data) => { this.Teams = data.result }

    );

  }
  goToDisplayTeam(x) {
    this.router.navigate([`displayTeam/${x}`]);
  }
}
