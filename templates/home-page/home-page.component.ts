import { Component, OnInit } from '@angular/core';
import { switchHomeService } from '../switchHome.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private SwitchService : switchHomeService) { }

  onClick()
  {
    this.SwitchService.changeHomePage();
  }

  ngOnInit() {
  }





}
