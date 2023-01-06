import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Whack-A-Mole</h1>
    <app-menu [points]="currentPoints"></app-menu>
    <app-play-field (countPoints)="updatePoints($event)"></app-play-field>
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
  currentPoints: number = 0;

  updatePoints(points: number) {
    this.currentPoints = points;
  }
}
