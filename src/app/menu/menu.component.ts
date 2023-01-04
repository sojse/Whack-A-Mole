import { Component } from '@angular/core';

import { TimeCounterService } from '../time-counter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  time: number = 60;
  points: number = 0;
  disableButton: boolean = false;

  // dependency injection of the TimeCounterService making it available to use in this class
  constructor(private _countDown: TimeCounterService) { }

  /**
   * When the user starts the game the TimeCounterService will be used using the observer/observable
   * pattern to make a countdown from 60 seconds to 0. 
   */
  startGame() {

    // Subscribing to the observable in the TimeCounterService to get the count down data. 
    this._countDown.countDown().subscribe((data) => {
      this.time = data;
      if(this.time === 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    })
  }
}
