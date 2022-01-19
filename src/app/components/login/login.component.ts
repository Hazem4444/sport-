import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  user: any = {};
  loginForm: FormGroup;
  errorMsg:string;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }
  login() {
    // console.log("Login", this.user);

    this.userService.login(this.user).subscribe(
      (data) => {

        if (data.result) {
          console.log("Here Result from BE", data.result);
          this.router.navigate([''])
        }
        else{
          this.errorMsg ="Please check Email/Pwd"
        }

      }

    );
  }
}
