import { Component, OnInit, Inject } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  run = false;
  s = 0;
  m = 0;
  minute = '00';
  second = '00';
  timeToWork = true;
  timeForBreak = false;
  procrastinationTime = '';

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}

  ngOnInit() {
    this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/blue.ico');
    const engine = timer(2000, 1000);
    engine.subscribe(() => this.clock());
  }

  clock() {
    if (this.run === true) {
      if (this.timeToWork === true) {
        this.funWork();
      } else {
        this.funBreak();
      }
    }
  }

  funWork() {
    if (this.s > 0) {
      this.s = this.s - 1;
      this.second = ('0' + this.s).slice(-2);
    } else {
      if (this.m > 0) {
        this.s = 59;
        this.m = this.m - 1;
        this.second = ('0' + this.s).slice(-2);
        this.minute = ('0' + this.m).slice(-2);
      } else {
        this.setToTest();
        // this.resetMinutesTo5();
        // this.resetMinuteTo00Seconds();
        // console.log(this.s);
        // console.log(this.m);
        this.timeToWork = false;
        this.timeForBreak = true;
        this.procrastinationTime = 'Look away from the screen!';
        this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/green.ico');
      }
    }
  }

  funBreak() {
    if (this.s > 0) {
      this.s = this.s - 1;
      this.second = ('0' + this.s).slice(-2);
    } else {
      if (this.m > 0) {
        this.s = 59;
        this.m = this.m - 1;
        this.second = ('0' + this.s).slice(-2);
        this.minute = ('0' + this.m).slice(-2);
      } else {
        this.setToTest();
        this.resetMinutesTo25();
        this.resetMinuteTo00Seconds();
        this.timeToWork = true;
        this.timeForBreak = false;
        this.procrastinationTime = 'Look away from the screen!';
        this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/green.ico');
      }
    }
    // console.log('Look Away');
    // // original
    // this.s = this.s + 1;
    // // test
    // // this.s = this.s + 60;
    // if ( this.s % 60 === 0) {
    //   this.s = 0;
    //   this.second = ('0' + this.s).slice(-2);
    //   // original
    //   this.m = this.m + 1;
    //   // test
    //   // this.m = this.m + 5;
    //   this.minute = ('0' + this.m).slice(-2);
    //   if (this.m % 5 === 0) {
    //     this.s = 0;
    //     this.second = ('0' + this.s).slice(-2);
    //     this.s = 0;
    //     this.m = 0;
    //     this.second = '00';
    //     this.minute = '00';
    //     this.timeToWork = true;
    //     this.timeForBreak = false;
    //     this.procrastinationTime = '';
    //     this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/blue.ico');
    //   }
    // }
    // this.second = ('0' + this.s).slice(-2);
  }

  resetClock() {
    this.setTo25();
    this.timeToWork = true;
    this.timeForBreak = false;
  }

  resetMinutesTo5() {
    this.m = 5;
    this.minute = '05';
  }

  resetMinutesTo25() {
    this.m = 25;
    this.minute = '25';
  }

  resetMinuteTo00Seconds() {
    this.s = 0;
    this.second = '00';
  }

  setTo25() {
    this.resetMinutesTo25();
    this.resetMinuteTo00Seconds();
  }

  setToTest() {
    this.m = 0;
    this.minute = '00';
    this.s = 2;
    this.second = '02';
  }

  startPomodoro() {
    this.resetClock()
    this.run = true;
  }

  stopPomodoro() {
    this.run = false;
  }
}
