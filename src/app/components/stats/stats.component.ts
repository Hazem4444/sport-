import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  statsTab: any[];
  constructor() { }

  ngOnInit() {
    this.statsTab = [
      { id: "1", title: 'Tun Vs Algr', score1: "0", score2: '0', pt:"150" },
      { id: "2", title: 'Tun Vs Egy', score1: "1", score2: '2', pt:"20" },
      { id : "3", title: 'Tun Vs Oman', score1: "6", score2: '5', pt:"60" },
      { id : "4", title: 'Tun Vs Qatar', score1: "3", score2: '1', pt:"50" },
      { id : "5", title: 'Oman Vs Qatar', score1: "3", score2: '1', pt:"22" },
      { id : "6", title: 'Egy Vs Qatar', score1: "3", score2: '1', pt:"200" },
      { id : "7", title: 'Algr Vs Qatar', score1: "3", score2: '1' , pt:"200"},
      { id :"8", title: 'Frnc Vs Qatar', score1: "3", score2: '1', pt:"30" },
      { id : "9", title: 'Russe Vs Qatar', score1: "3", score2: '1', pt:"200" }

    ]
  }

}
