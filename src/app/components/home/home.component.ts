import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
m:any;
  constructor() { }

  ngOnInit() {
    this.m = 
      { id: "1", title: 'Tun Vs Algr', score1: "8", score2: '9' }
     
    
  }

}
