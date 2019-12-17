import { Component, OnInit } from '@angular/core';

declare const faceapi : any;
declare const startVideo : any;

@Component({
  selector: 'app-machine-learning-component',
  templateUrl: './machine-learning-component.component.html',
  styleUrls: ['./machine-learning-component.component.css']
})
export class MachineLearningComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    startVideo();
  }

}
