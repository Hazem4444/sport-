import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  match: any;
  constructor(
    private matchService: MatchService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.matchService.sendReqToGetMatchById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.match = data.result;
      }
    );
  }

}
