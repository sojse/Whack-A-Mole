import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TimeCounterService {

  constructor() { }

  /**
   * A function that will make a countdown using setInterval and the observer/observable pattern
   */
  countDown() {
    let timeLeft: number = 60;

    return new Observable<number>((observer) => {
      setInterval(() => { 
        if(timeLeft > 0) {
          timeLeft--;
        //the data the observer will emit, it will only emit if it is a subscriber
        observer.next(timeLeft);          
        }
      }, 1000);
    });

  }
}
