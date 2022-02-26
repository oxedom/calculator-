import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

 lastPressed : string = ""


  pressNumber(numberPressed : string) {

    console.log(numberPressed)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
