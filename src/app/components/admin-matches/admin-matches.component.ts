import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
  matches: any = [];
  constructor(
    private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {

    this.matchService.sendReqToGetAllMatch().subscribe(
      (data) => { this.matches = data.result }

    );
  }
  goToDisplayMatch(x) {
    this.router.navigate([`displayMatch/${x}`]);
  }

  goToEditMatch(x) {
    this.router.navigate([`editMatch/${x}`]);
  }
  deleteMatch(id){
    this.matchService.sendReqToDeleteMatchById(id).subscribe(
      (data)=>{
        console.log('result from BE ', data);
        this.matchService.sendReqToGetAllMatch().subscribe(
          (data)=>{
            this.matches= data.result;
          }
        )
        
      }
    );
  }
}
