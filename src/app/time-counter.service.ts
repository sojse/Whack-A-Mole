import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeCounterService {

  timeLeft: number = 60;

  constructor() { }

  /**
   * A function that will make a countdown using setInterval and the observer/observable pattern
   * to count down from 60 to 0 seconds
   */
  countDown(gameStatus: boolean) {

    if(gameStatus) {
      this.timeLeft = 60;
    }

    return new Observable<number>((observer) => {
      setInterval(() => { 
        if(this.timeLeft > 0) {
          this.timeLeft--;
          //the data the observer will emit when subscribed to
          observer.next(this.timeLeft);          
        }
      }, 1000);
    });

  }

}
