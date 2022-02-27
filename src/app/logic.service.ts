import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogicService {

  public subject  = new Subject<any>()
  private messageSource = new  BehaviorSubject(this.subject)


  
  constructor() { }
}


