import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  currentDisplayString: string = "0"
  
  pressNumber(numberPressed : string) {

    console.log(numberPressed)

  }


  ngOnInit(): void {
  }

}
