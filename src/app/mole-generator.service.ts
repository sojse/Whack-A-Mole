import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AvailableSquares } from './AvailableSquares';

@Injectable({
  providedIn: 'root'
})
export class MoleGeneratorService {
  maxAmountOfMoles: number = 3;
  maxVisibleTime: number = 4;   //in seconds
  availableSquare: AvailableSquares = {id: 0, available: true };

  constructor() { }

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }  

  generateMole() {
    let playFieldsSquare: number = 0;

    return new Observable<number>((observer) => {
      setInterval(() => {
        playFieldsSquare = this.getRandomNumber(24);
        observer.next(playFieldsSquare);
      }, 1000 * this.getRandomNumber(10));
    })
  }

  timeCounter(activeSquare: number) {
    setInterval(()=> {
      activeSquare
    }, 1000 * this.maxVisibleTime);
  }
}
