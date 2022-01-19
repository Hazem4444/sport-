import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-vs',
  templateUrl: './teams-vs.component.html',
  styleUrls: ['./teams-vs.component.css']
})
export class TeamsVsComponent implements OnInit {
 @Input() resultInput:any;
  constructor() { }

  ngOnInit() {
  

  }
score(a,b){
  let result;
  if (a == b) {
    result = ['0', 'blue', 'draw']
  } else if (a > b) {
        result = ['1', 'green' ,'win']

  } else{
        result = ['2', 'yellow', 'loss']

  }
  return result;
}

}
