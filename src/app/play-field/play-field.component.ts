import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

import { MoleGeneratorService } from '../mole-generator.service';
import { AvailableSquares } from '../AvailableSquares';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnChanges {
  points: number = 0;
  @Input() time: number = 0;
  @Output() countPoints = new EventEmitter<number>();
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
    {id: 25, available: true},
  ];

  constructor(private _moleGenerator: MoleGeneratorService) { }

  //function used to generate the playfield array in the html
  counter( i: number ) {
    return new Array(i);
  }

  /**
   * This function will run every time the time input variable changes
   * it will then check the time to see if it is running or not and if the
   * time is running the game will start
   */
  ngOnChanges() {
    if(this.time !== 0) {
      this.startGame();
    }
  }

  startGame() {
    this._moleGenerator.generateMole().subscribe((data) => {
    for(let i = 0; i <= 24; i++) {
      if(data === this.playField[i].id) {
          this.playField[i].available = false
          setInterval(() => {
            this.playField[i].available = true
          }, 4000);
          console.log(data);
        }
      }
    });
  }

  clickedSquare(index: number) {
    if (this.playField[index].available === false) {
      this.points++;
      this.countPoints.emit(this.points);
      this.playField[index].available = true;
    }
  }
  
}
