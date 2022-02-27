import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogicService {

 
  public add(a : string, b : string) { 
    let result = 0
    let aNumber = parseInt(a)
    let bNumber = parseInt(b)
    result = aNumber + bNumber
    return result.toString() }

  public subtract(a : string, b : string) { 
    let result = 0
    let aNumber = parseInt(a)
    let bNumber = parseInt(b)
    result = aNumber - bNumber
    return result.toString() }

    public multi(a : string, b : string) { 
    let result = 0
    let aNumber = parseInt(a)
    let bNumber = parseInt(b)
    result = aNumber * bNumber
    return result.toString() }


    public divide(a : string, b : string) { 
    let result = 0
    let aNumber = parseInt(a)
    let bNumber = parseInt(b)
    result = aNumber / bNumber
    return result.toString() }

  
  constructor() 
  {
  console.log(this.add('5', '2'), this.multi('3', '10'), this.divide('10', '2')    )   



  }
}


