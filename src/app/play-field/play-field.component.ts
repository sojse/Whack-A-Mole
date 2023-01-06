import { Component, OnInit } from '@angular/core';

import { MoleGeneratorService } from '../mole-generator.service';
import { AvailableSquares } from '../AvailableSquares';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {
  amountOfSquares: number[] = [1, 2, 3, 4, 5];
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

  ngOnInit(): void {
    this.getPlayFieldSquares();
  }

  getPlayFieldSquares() {
    let playFieldSquare = this._moleGenerator.generateMole();

    for(let i = 0; i <= 25; i++) {
      if(playFieldSquare === this.playField[i].id) {
        this.playField[i].available = false;
      }
    }

    console.log(playFieldSquare);
  }

 
}
