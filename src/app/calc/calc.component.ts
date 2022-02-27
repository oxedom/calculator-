import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  //Display String (What is shown on the frontend)
  currentDisplayString: string = '0'

  //Display String (Current Value insie the comps Memory)
  currentValue : number = 0

  //Number that has been most recently pressed
  currentNumber : any = ""

  //Number that was last pressed (can overlap with current Number on First Press)
  prevPressed : any = ""

  //A Var that is used to store which Var was pressed before waiting for secound number
  opPressed : any = ""
  waitForSecoundNumber: boolean = false;


  appendNumber(numberPressed : number) 
  {
  this.currentNumber = this.currentNumber.toString() + numberPressed.toString()
  this.prevPressed = this.currentNumber
  this. currentDisplayString = this.currentNumber
  return this.currentNumber
  }

  pressNumber(numberPressed : number) {
    
    if(!this.waitForSecoundNumber) 
    {
      this.appendNumber(numberPressed)
    }
    else 
    {
      this.currentNumber = this.currentNumber.toString() + numberPressed.toString()
      this. currentDisplayString = this.currentNumber
    }
    
  }

  operator(op : string) 
  {
    this.setDisplayString('0')
    this.currentNumber = ''
    if(op != '=') {  this.opPressed = op;}
    console.log(this.opPressed)
    this.waitForSecoundNumber = true
  
    if(op == "=")
     switch(this.opPressed) 
     {
      case 'x': {console.log(this.currentNumber)           } 
      break;

      case '/': console.log('big fat /')
      break;
      case '*':
      break;
      case '-':
      break;
    }

  }

  setDisplayString(updatePara : string) { this.currentDisplayString = updatePara }

  clear() 
  {

    this.currentDisplayString = '0'
    this.currentValue  = 0
    this.currentNumber = ""
    this.prevPressed = ""
    this.opPressed =""

  }

  add(a : number, b : number) { return a + b }

  subtract(a : number, b : number) { return a -b }

  multi(a : number, b : number) { return a  * b  }

  divide(a : number, b : number) { return a / b }

  ngOnInit(): void {
  }

}
