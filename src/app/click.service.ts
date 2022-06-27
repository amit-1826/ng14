import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClickService {

  constructor() { }

  registerClick() {
    console.log('Clicked.!!');
    
  }
}
