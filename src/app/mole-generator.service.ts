// Josefine Isberg, FEU22
import { Injectable } from '@angular/core';

import { AvailableHole } from './AvailableSquares';

@Injectable({
  providedIn: 'root'
})
export class MoleGeneratorService {

  playField: AvailableHole[] = [
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

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }  

  startGame(gameStart: boolean) {
    this.gameStatus = gameStart;
    this.generateMole();
  }


  /**
   * This function will run once every second and generate a mole, that will pop up on the playfield
   * in a random amount of time, if there aren't already 3 moles on the playfield.
   * It will then get a random number that resembles one of the playfield id:s. if it generates a number that is
   * already occupied it will generate a new until it finds a value in an available square. 
   */
  generateMole() {
    let hole: number = 25;   //default value that is outside of the playfield array indexes.


      setTimeout(() => {
        // needs to check the gameStatus otherwise random moles pop up a few seconds after the game has stopped
        if(this.gameStatus && this.numberOfOccupied < 3) {
          hole = this.getRandomNumber(24);

          while (!this.playField[hole].available) {
            hole = this.getRandomNumber(24);
          }

          this.playField[hole].available = false;  //making the square occupied
          this.numberOfOccupied++;

        }

         this.removeMoleAfterFourSeconds(hole);

      }, 10 * this.getRandomNumber(100));
    
  }

  /**
   * Firstly checks if the playFieldSquare is a valid number, if it is a timeout for 4 seconds will run and
   * check if the square is already whacked or not. If it isn't numberOfOccupied will decrease and open up for new
   * moles to pop up on the screen
   * Lastly it will change the square to available
   */
  removeMoleAfterFourSeconds(hole: number) {
    if(hole !== 25) {
      setTimeout(() => {
        if(this.playField[hole].available === false) {
          this.numberOfOccupied--;
        }
        this.playField[hole].available = true;
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
