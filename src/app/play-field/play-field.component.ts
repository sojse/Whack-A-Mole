import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { MoleGeneratorService } from '../mole-generator.service';

/**
 * TO DO
 * 
 *  fixa så det enbart kan komma upp en mole i samma ruta medans den är unavailable
 * 
 *  fixa så enbart tre moles kan vara uppe samtidigt
 * 
 *  fixa så det inte kommer upp några moles när tiden tar slut
 * 
 *  reset poäng när man trycker på start game
 * 
 */
@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnChanges {
  
  points: number = 0;
  @Output() countPoints = new EventEmitter<number>();
  
  @Input() time: number = 0;

  constructor(public _moleGenerator: MoleGeneratorService) { }

  /**
   * This function will run every time the time input variable changes
   * it will then check the time to see if it is running or not and if the
   * time is running the game is running
   */
  ngOnChanges() {
    if(this.time > 0) {
      this.runGame();
    } 
  }


runGame() {
  this._moleGenerator.startGame();
}

  /**
   * gets the index of the square the user pressed, if the square is occupied with a mole the user will get a point
   * the points are getting emitted to the parent component and will later be used in the menu component to display the points
   * if a mole was whacked the playfield square will change to available
   */
  clickedSquare(index: number) {
    let hasMole: boolean = this._moleGenerator.whackedMole(index);
    if(hasMole) {
      this.points++;
      console.log(this.points);
      this.countPoints.emit(this.points);
    }
  }
  
}
