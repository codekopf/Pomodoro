import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
