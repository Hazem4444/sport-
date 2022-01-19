import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTab:any[];
  constructor() { }

  ngOnInit() {
    this.blogTab =[
      {id:1,date:'23/11/1998' , img:"",title:'Tun Vs Algr', description:'Partie 2021'},
      {id:2,date:'10/12/1988' , img:"",title:'Tun Vs Egyp', description:'Partie 2021'},
      {id:3,date:'16/2/1993' , img:"",title:'Tun Vs Oman', description:'Partie 2021'}
    
    
      
    ]
  }

}
