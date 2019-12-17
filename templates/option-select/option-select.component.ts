import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  trigger_testerLogin()
  {
    this.router.navigate(['/tLogin']);
  }

  trigger_UserLogin()
  {
    this.router.navigate(['/uLogin']);
  }

  trigger_ComedianLogin()
  {
    this.router.navigate(['/cLogin']);
  }

}
