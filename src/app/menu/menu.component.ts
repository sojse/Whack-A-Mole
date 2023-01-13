// Josefine Isberg, FEU22
import { Component, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';

import { TimeCounterService } from '../time-counter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  time!: number;
  @Input() points: number = 0;
  disableButton: boolean = false;
  @Output() gameStarted = new EventEmitter<boolean>();
  gameStart = false;

  // dependency injection of the TimeCounterService making it available to use in this class
  constructor(private _countDown: TimeCounterService) { 
    // connectint the time variable in the component with the time variable in the service
    this.time = this._countDown.timeLeft;
  }

  /**
   * When the user starts the game the TimeCounterService will be used using the observer/observable
   * pattern to make a countdown from 60 seconds to 0. And start the game by emitting data about the 
   * gameStatus every second that the observable emits data (every second) 
   */
  startGame() {
    this.points = 0;

    this.gameStart = true;
    this.disableButton = true;

    // Subscribing to the observable in the TimeCounterService to get the count down data. 
    this._countDown.countDown(this.gameStart).subscribe((data) => {
      this.time = data;
      //controls if the start game button will be disabled or enabled
      if(this.time === 0) {
        this.disableButton = false;
        this.gameStart = false;
      } 

      this.gameStarted.emit(this.gameStart);
    })
  }
}
