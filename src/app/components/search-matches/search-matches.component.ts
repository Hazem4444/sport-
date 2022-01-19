import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
 

  constructor(
    private matchService:MatchService,
    private router:Router
  ) { }

  ngOnInit() {
  }
searchByTeamOne(){
  
}
}
