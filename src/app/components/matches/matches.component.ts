import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any[];
  constructor() { }

  ngOnInit() {
    this.matches = [
      { id: 1, title: 'Tun Vs Algr', description: 'Partie 2022', img: "", score1: "0", score2: '0' },
      { id: 2, title: 'Tun Vs Egy', description: 'Partie 1998', img: "", score1: "1", score2: '2' },
      { id: 3, title: 'Tun Vs Oman', description: 'Partie 1988', img: "", score1: "6", score2: '5' },
      { id: 4, title: 'Tun Vs Qatar', description: 'Partie 1996', img: "", score1: "3", score2: '1' }

    ]
  }

}
