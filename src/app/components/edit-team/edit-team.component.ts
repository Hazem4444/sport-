import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: any = {};
  EditTeamForm: FormGroup;
  id: any;

  constructor(private formBuilder:FormBuilder ,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router : Router,

  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.teamService.sendReqToGetTeamById(this.id).subscribe(
        (data) => {
          this.team = data.result
        }
      );
  }

}
