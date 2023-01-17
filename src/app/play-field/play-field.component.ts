// Josefine Isberg, FEU22
import { Component, EventEmitter, Output } from '@angular/core';

import { MoleGeneratorService } from '../mole-generator.service';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent {
  
  points: number = 0;
  @Output() countPoints = new EventEmitter<number>();

  constructor(public _moleGenerator: MoleGeneratorService) { }

  /**
   * As long as the gameStart variable is true the startGame function in my service will be executed
   * when gameStart is false the endGame function will be executed
   */
  startGame(gameStart: boolean) {
    if(gameStart) {
      this._moleGenerator.startGame(gameStart);
    } else {
      this._moleGenerator.endGame(gameStart);
    }
  }

  /**
   * Starts with checking with the service if the square has a mole in it.
   * if the square is occupied with a mole the user will get a point
   * the points are getting emitted to the parent component and will later be used in the menu component to display the points
   */
  clickedSquare(index: number) {
    let hasMole: boolean = this._moleGenerator.whackedMole(index);
    if(hasMole) {
      this.playSoundEffect();
      this.points++;
      this.countPoints.emit(this.points);
    }
  }

  /**
   * Plays sound effect when the user hits a mole
   */
  playSoundEffect() {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/6283');
    audio.play();
  }
}
