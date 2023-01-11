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
   /*
  generateMole() {
    let playFieldsSquare: number = 0;

    return new Observable<number>((observer) => {
      setTimeout(() => {
        playFieldsSquare = this.getRandomNumber(24);
        observer.next(playFieldsSquare);
      }, 1000 * this.getRandomNumber(10));
    })
  }*/

  playField: AvailableSquares[] = [
    {id: 0, available: true},
    {id: 1, available: true},
    {id: 2, available: true},
    {id: 3, available: true},
    {id: 4, available: true},
    {id: 5, available: true},
    {id: 6, available: true},
    {id: 7, available: true},
    {id: 8, available: true},
    {id: 9, available: true},
    {id: 10, available: true},
    {id: 11, available: true},
    {id: 12, available: true},
    {id: 13, available: true},
    {id: 14, available: true},
    {id: 15, available: true},
    {id: 16, available: true},
    {id: 17, available: true},
    {id: 18, available: true},
    {id: 19, available: true},
    {id: 20, available: true},
    {id: 21, available: true},
    {id: 22, available: true},
    {id: 23, available: true},
    {id: 24, available: true},
  ];

  startGame() {
    let playFieldsSquare: number = 0;

    setTimeout(() => {
      playFieldsSquare = this.getRandomNumber(24);

      for(let i = 0; i < this.playField.length ; i++) {

        //the number that the randomised number matches will display a mole
        if(playFieldsSquare === this.playField[i].id) {
            this.makeSquareUnavailable(this.playField[i]);

            //after 4 seconds the mole will disappear
            setTimeout(() => {
              this.makeSquareAvailable(this.playField[i]);
            }, 4000);
        }

      } 

    }, 1000 * this.getRandomNumber(10)); 

  }

  makeSquareAvailable(square: AvailableSquares) {
    square.available = true;
    console.log(square);
  }

  makeSquareUnavailable(square: AvailableSquares) {
    square.available = false;
    console.log(square);
  }

  /**
   * Checks if the clicked square has a mole and returns the answer to the component
   */
  whackedMole(index: number) {
    if(this.playField[index].available === false) {
      this.makeSquareAvailable(this.playField[index]);
      return true;
    }
    return false;
  }

  /**
   * Function used to generate the playfield in the component
   */
  getPlayfield() {
    return this.playField;
  }

    /**
   * Function used to generate the moles when their status changes during the game
   */
  getSquareStatus(index: number) {
    return this.playField[index].available;
  }
  
}
