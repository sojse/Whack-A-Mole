import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoleGeneratorService {
  maxAmountOfMoles: number = 3;
  maxVisibleTime: number = 4;   //in seconds

  constructor() { }

  getRandomNumber(max: number) : number {
    return Math.floor(Math.random() * (max + 1));
  }

  generateMole(): number {
    let moles: number = 0;  //will keep track on the amount of moles
    let numberOfMoles: number = this.generateAmountOfMoles();
    let playFieldsSquare: number = 0;

    //if the current moles haven't overpassed the max value
    if(moles != numberOfMoles) {
      playFieldsSquare = this.getRandomNumber(24);  //generates random numbers on the playfield
      moles++;
    }
    return playFieldsSquare;
  }

  generateAmountOfMoles (): number {
    return this.getRandomNumber(this.maxAmountOfMoles);
  }
}
