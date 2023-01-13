import { Injectable } from '@angular/core';

import { AvailableSquares } from './AvailableSquares';

@Injectable({
  providedIn: 'root'
})
export class MoleGeneratorService {
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

  nbrOfOccupied: number = 0;
  gameStatus: boolean = false;


  constructor() { }

  /**
 * TO DO
 * 
 *  fixa så enbart tre moles kan vara uppe samtidigt
 * 
 */

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }  

  startGame(gameStart: boolean) {
    this.gameStatus = gameStart;

    //will loop as long as the number generated aren't already occiupied with a mole and as long as the number of
    //moles isn't over three at the same time
    setTimeout(() => {
      this.generateMole();
    }, 500 * this.getRandomNumber(10));
  }

  generateMole() {
    let playFieldsSquare: number = 0;

    // If the game is on a mole will generate, the if statement is needed otherwise random moles pop up
    // a few seconds after the game has stopped
    if(this.gameStatus) {
      playFieldsSquare = this.getRandomNumber(24);

      while (!this.playField[playFieldsSquare].available && this.nbrOfOccupied > 3) {
        playFieldsSquare = this.getRandomNumber(24);
      }
  
      this.nbrOfOccupied++;
      console.log(this.nbrOfOccupied);
  
  
      this.playField[playFieldsSquare].available = false;
  
      setTimeout(() => {
        this.makeSquareAvailable(this.playField[playFieldsSquare]);
      }, 4000);
    }
  }


  makeSquareAvailable(square: AvailableSquares) {
    square.available = true;
    this.nbrOfOccupied--;
  }

  endGame(gameStart: boolean) {
    this.gameStatus = gameStart;

    this.playField.forEach(element => {
      this.makeSquareAvailable(element);
    })
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
