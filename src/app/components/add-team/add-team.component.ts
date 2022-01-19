import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team:any={};
  addTeamForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private teamservice:TeamService) { }

  ngOnInit() {
    this.addTeamForm= this.formBuilder.group({
      name:[''],
      foundation:[''],
      country:[''],
      stadium:[''],
      img:['']
     
    })
  }
  addTeam(){
    console.log("btn clicked", this.team);
    this.teamservice.sendReqToAddTeam(this.team,this.addTeamForm.value.img).subscribe(
      (data)=>{
        console.log("here data after save from BE", data.message);
        
      }
    )
    
  }
  onImageSelected(event: Event){
   
  }
}
