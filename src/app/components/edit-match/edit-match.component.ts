import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match: any = {};
  EditMatchForm: FormGroup;
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.sendReqToGetMatchById(this.id).subscribe(

      (data) => {
        this.match = data.result;
      }
    );
    this.EditMatchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }


  EditMatch() {
    this.matchService.sendReqToEditMatchById(this.match).subscribe(
      (data) =>{
        console.log('Message From BackEnd' , data.message);
        this.router.navigate(['admin'])
        
      }
    );
  }
}
