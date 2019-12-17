import { Component, OnInit } from '@angular/core';
import {switchHomeService} from './switchHome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[switchHomeService],
})
export class AppComponent{

 //optionSelect:boolean;
  constructor(private switchService : switchHomeService){}



}
