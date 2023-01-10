import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AvailableSquares } from './AvailableSquares';

@Injectable({
  providedIn: 'root'
})
export class MoleGeneratorService {
  maxVisibleTime: number = 4;   //in seconds
  occupiedSquares: number[] = [];

  constructor() { }

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }  

  /**
   * creates an observable that will generate random numbers that will be used to determine
   * what square the mole will pop up in. 
   */
  generateMole() {
    let playFieldsSquare: number = 0;

    return new Observable<number>((observer) => {
      setTimeout(() => {
        playFieldsSquare = this.getRandomNumber(24);
        observer.next(playFieldsSquare);
      }, 1000 * this.getRandomNumber(4));
    })
  }

  makeAvailable(occupiedSquare: number) {
    setTimeout(() => {
      let index = this.occupiedSquares.indexOf(occupiedSquare);
      this.occupiedSquares.splice(index, 1)
    }, 4000)
  }

}
