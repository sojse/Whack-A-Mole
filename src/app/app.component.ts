import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Whack-A-Mole</h1>
    <app-menu [points]="currentPoints" (gameStarted)="playfield.startGame($event)"></app-menu>
    <app-play-field (countPoints)="updatePoints($event)" [time]="currentTime" #playfield></app-play-field>
  </div>
  `,
  styles: [`
  .container {
    padding: 40px 15%;
  }

  h1 {
    text-align: center;
    font-size: 1.6rem;
  }
  `]
})
export class AppComponent {
  /**
   * the points is given from the playfield component and is forwarded to the menu component
   * the time is given from the menu component and forwarded to the playfield component
   */
  currentPoints: number = 0;
  currentTime: number = 0;

  updatePoints(points: number) {
    this.currentPoints = points;
  }

  getTime(time: number) {
    //getTime($event)
    this.currentTime = time;
  }
}
