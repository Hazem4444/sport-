import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player: any = {};
  EditPlayerForm: FormGroup;
  id: any;

  constructor(private formBuilder:FormBuilder ,
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    
    ) { }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.playerService.sendReqToGetPlayerById(this.id).subscribe(
        (data) => {
          this.player = data.result
        }
      );
      this.EditPlayerForm = this.formBuilder.group({
        number: [''],
        post: [''],
        name: [''],
        age: [''],
        note: [''],
        avatar: [''],
      })
      
    }
  
    EditPlayer() {
      this.playerService.sendReqToEditPlayerById(this.player).subscribe(
        (data) =>{
          console.log('Message From BackEnd' , data.message);
          this.router.navigate(['admin'])
          
        }
      );
    }
  
  

}
