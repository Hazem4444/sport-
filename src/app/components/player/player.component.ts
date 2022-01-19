import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() inputPlayers: any;
  
  constructor() { }

  ngOnInit() {
  }
  note(a) {
    let result;
    if (a >= 0 && a <= 2) {
      result = 'red'
    }
    else if (a >= 3 && a <= 5) {
      result = 'orange'
    }
    else if (a >= 6 && a <= 8) {
      result = 'yellow'

    }

    else if (a >= 9 && a <= 10) {
      result = 'green'
    }

    return result;
  }
}


