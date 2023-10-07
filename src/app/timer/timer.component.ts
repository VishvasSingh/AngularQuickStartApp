import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(()=>{ observer.next(new Date().toString().slice(0,25).toUpperCase()),1000})
  })
}
