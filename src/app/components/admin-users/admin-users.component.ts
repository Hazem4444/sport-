import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any=[];

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users= data.result;
      }
    );
  }
  goToDisplayUser(id){
    this.router.navigate([`displayUser/${id}`])
  }


}
