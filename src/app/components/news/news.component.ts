import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
// variable global
x:number=9;
newsTab:any[];
  constructor() { }


  //une fonction 
  ngOnInit() {
   
    this.newsTab =[
      {id:1 , title:'Tun Vs Algr', description:'Partie 1',img:"", avatar:"",date:'20/12/2021'},
      {id:2 , title:'Tun Vs Egypte', description:'Partie 2',img:"", avatar:"",date:'20/12/2021'},
      {id:3 , title:'Tun Vs Oman', description:'Partie 3',img:"", avatar:"",date:'20/12/2021'},
      {id:4 , title:'Est Vs CSS', description:'Partie 4',img:"", avatar:"",date:'20/12/2021'},
      {id:5 , title:'CA Vs EST', description:'Partie 5',img:"", avatar:"",date:'20/12/2021'}
    ]
  }

}
