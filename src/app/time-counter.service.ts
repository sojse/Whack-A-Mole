import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeCounterService {

  constructor() { }

  /**
   * A function that will make a countdown using setInterval and the observer/observable pattern
   * to count down from 60 to 0 seconds
   */
  countDown() {
    let timeLeft: number = 60;

    return new Observable<number>((observer) => {
      setInterval(() => { 
        if(timeLeft > 0) {
          timeLeft--;
        //the data the observer will emit when subscribed to
        observer.next(timeLeft);          
        }
      }, 1000);
    });

  }
}
