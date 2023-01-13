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

  numberOfOccupied: number = 0;
  gameStatus: boolean = false;


  constructor() { }

  /**
 * TO DO
 * 
 *  fixa så molesen tas bort efter 4 sekunder i variablen som innehåller hur moles många som är uppe
 * 
 */

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }  

  startGame(gameStart: boolean) {
    this.gameStatus = gameStart;
    this.generateMole();
  }


  async generateMole() {
    let playFieldSquare: number = 25;

    await new Promise(() => {
      setTimeout(() => {
        // If the game is on a mole will generate and as long as there aren't more than 3 moles up at the same time
        //the if statement is needed otherwise random moles pop up
        // a few seconds after the game has stopped
        if(this.gameStatus && this.numberOfOccupied < 3) {
          playFieldSquare = this.getRandomNumber(24);

          //will loop as long as the number generated aren't already occiupied with a mole and as long as the number of
          //moles isn't over three at the same time
          while (!this.playField[playFieldSquare].available) {
            playFieldSquare = this.getRandomNumber(24);
          }

          this.playField[playFieldSquare].available = false;
          this.numberOfOccupied++;
          //console.log(this.numberOfOccupied);
    
        }

         this.removeMoleAfterFourSeconds(playFieldSquare);

      }, 10 * this.getRandomNumber(100));
    });
  }

  /**
   * Firstly checks if the playFieldSquare is a valid number, if it is a timeout for 4 seconds will run and
   * check if the square is already whacked or not. If it isn't numberOfOccupied will decrease
   * Lastly it will change the square to available
   */
  removeMoleAfterFourSeconds(playFieldSquare: number) {
    if(playFieldSquare !== 25) {
      setTimeout(() => {
        if(this.playField[playFieldSquare].available === false) {
          this.numberOfOccupied--;
        }
        this.playField[playFieldSquare].available = true;
    }, 4000); }
  }

  /**
   * Resets the playfield
   */
  endGame(gameStart: boolean) {
    this.gameStatus = gameStart;
    this.numberOfOccupied = 0;
    this.playField.forEach(playFieldSquare => {
      playFieldSquare.available = true;
    })
  }


  //#region Functions used by the component to generate the playfield
  /**
   * Checks if the clicked square has a mole and returns the answer to the component
   */
  whackedMole(index: number) {
    if(this.playField[index].available === false) {
      this.numberOfOccupied--;
      this.playField[index].available = true;
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
  //#endregion
}
