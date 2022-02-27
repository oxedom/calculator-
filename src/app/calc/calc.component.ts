import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private logic : LogicService) { }

  //Display String (What is shown on the frontend)
  currentDisplayString: string = '0'

  //Display String (Current Value insie the comps Memory)
  currentValue : number = 0

  //Number that has been most recently pressed
  currentNumber : string = ""

  //Number that was last pressed (can overlap with current Number on First Press)
  prevPressed : string = ""

  //A Var that is used to store which Var was pressed before waiting for secound number
  opPressed : any = ""
  waitForSecoundNumber: boolean = false;


  appendNumber(numberPressed : string) 
  {
  this.currentNumber = this.currentNumber + numberPressed
  this.prevPressed = this.currentNumber
  this. currentDisplayString = this.currentNumber
  return this.currentNumber
  }

  pressNumber(numberPressed : string) {
    
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
    console.log(`the op that was pressed is ${op}`)

    if(op != '=') {  
    this.currentNumber = ''
    this.setDisplayString('---')
    this.opPressed = op;}
    this.waitForSecoundNumber = !this.waitForSecoundNumber
  
    if(op == "=") 
    {
      
      switch(this.opPressed) 
     {
      case 'x': 
      {
        let answer =  this.logic.multi(this.prevPressed, this.currentNumber)
        this.prevPressed = answer
        this.currentDisplayString = answer

        this.currentNumber = ''
        this.opPressed = ''
      } 
      break;
      case '/': 
      {
        let answer =  this.logic.divide(this.prevPressed, this.currentNumber)
        this.prevPressed = answer
        this.currentDisplayString = answer

        this.currentNumber = ''
        this.opPressed = ''
      }
      break;
      case '+': 
      {
        let answer =  this.logic.add(this.prevPressed, this.currentNumber)
        this.prevPressed = answer
        this.currentDisplayString = answer
        this.currentNumber = ''
        this.opPressed = ''
      }
      break;
      case '-': 
      {
        let answer =  this.logic.subtract(this.prevPressed, this.currentNumber)
        this.prevPressed = answer
        this.currentDisplayString = answer
        this.currentNumber = ''
        this.opPressed = ''
      }
      break;
    }

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


  ngOnInit(): void {
  }

}
