import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MoleGeneratorService } from '../mole-generator.service';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent {
  
  points: number = 0;
  @Output() countPoints = new EventEmitter<number>();
  
  @Input() time: number = 0;

  constructor(public _moleGenerator: MoleGeneratorService) { }

  /**
   * This function will run every time the time input variable changes
   * it will then check the time to see if it is running or not and if the
   * time is running the game is running
   */
  startGame(gameStart: boolean) {
    if(gameStart) {
      this._moleGenerator.startGame(gameStart);
    } else {
      this._moleGenerator.endGame(gameStart);
    }
  }

  /**
   * gets the index of the square the user pressed, if the square is occupied with a mole the user will get a point
   * the points are getting emitted to the parent component and will later be used in the menu component to display the points
   * if a mole was whacked the playfield square will change to available
   */
  clickedSquare(index: number) {
    this.playSoundEffect();
    let hasMole: boolean = this._moleGenerator.whackedMole(index);
    if(hasMole) {
      this.points++;
      this.countPoints.emit(this.points);
    }
  }

  playSoundEffect() {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/6283');
    audio.play();
  }
  
}
