import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private logic : LogicService) { }

  //Number that has been most recently pressed
  currentNumber : string = '0'

  //Number that was last pressed (can overlap with current Number on First Press)
  prevPressed : string = ''

  //A Var that is used to store which OP was pressed before waiting for secound number
  opPressed : string = '' 
  //
  waitForOther : boolean = false

  pressNumber(paraNumber : string) 
  {
    if(this.currentNumber == '0') { this.currentNumber = ''}
    this.currentNumber += paraNumber
  }
  calculate(paraOp : string) 
  {
    if(this.currentNumber == '0' && paraOp == '-') 
    {
      this.currentNumber = '-' 
    }
    else 
    {
      if(this.currentNumber != '' && this.prevPressed != '' ) 
    {
      switch (this.opPressed) {
        case '+': { this.currentNumber = this.logic.add(this.prevPressed, this.currentNumber) }
          break;
        case '-': { this.currentNumber = this.logic.subtract(this.prevPressed, this.currentNumber)}
          break;
        case 'x': { this.currentNumber = this.logic.multi(this.prevPressed, this.currentNumber)}
          break;
        case '/': {  this.currentNumber = this.logic.divide(this.prevPressed, this.currentNumber)}
          break;  
      }
      this.opPressed = ''
      this.prevPressed = ''
    }
    else 
    {
      this.opPressed = paraOp
      this.prevPressed = this.currentNumber
      this.currentNumber = '0'
    }
    }
    
    
  }
  addDecimal() 
  { 
    if(!this.currentNumber.includes('.')) 
    {
      this.currentNumber += '.'
    }
    console.log('cant add more dec')
  }
  clear() 
  {
    this.currentNumber = '0'
    this.prevPressed = ''
    this.opPressed = ''
  }
  

  ngOnInit(): void {
  }

}
