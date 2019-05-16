import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let fgcolor = '#';
    let bgcolor = '#';
    for (let i = 0; i < 6; i++) {
      const randomNo = Math.floor(Math.random() * 16);
      fgcolor += letters[randomNo];
      bgcolor += letters[15 - randomNo];
    }
    return {
      fgcolor, bgcolor
    };
  }
}
