import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  
  SignupForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService:UserService) { }

  ngOnInit() {
    this.SignupForm= this.formBuilder.group({
      fName:['', [Validators.required, Validators.minLength(3)]],
      lName:['', [Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, Validators.email]],
      pwd:['',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cpwd:['']
     
    },
    {
    validator: MustMatch('pwd','cpwd')
    }
    );
  }
  signup(){
    console.log("signup", this.SignupForm.value );
    this.userService.sendReqToSignup(this.SignupForm.value ).subscribe(
      (data) => {

      console.log(data.message);
      
      }

    )
  }
}
