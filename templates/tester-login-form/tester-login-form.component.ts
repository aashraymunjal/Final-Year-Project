import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester-login-form',
  templateUrl: './tester-login-form.component.html',
  styleUrls: ['./tester-login-form.component.css']
})
export class TesterLoginFormComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClick()
  {
    this.router.navigate(["testerWork"]);
  }

}
