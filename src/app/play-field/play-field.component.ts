import { Component } from '@angular/core';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent {
  amountOfSquares: number[] = [1, 2, 3, 4, 5];

  //method used to generate the playfield array in the html
  counter( i: number ) {
    return new Array(i);
  }
 
}
