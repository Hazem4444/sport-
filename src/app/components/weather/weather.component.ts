import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private weatherservice:WeatherService,
    private router : Router
    
  ) { }

  ngOnInit() {
    this.WeatherForm = this.formBuilder.group({

    })
  }
  searchByCity(){
   
  }

}
