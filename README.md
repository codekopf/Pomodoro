# Pomodoro

This is a simple Angular 2 project which will help you to be more productive and focus more on important things.

You can find a working example of this module [here](http://bit.ly/2pCCm0l).

## What is Pomodoro?
The Pomodoro technique is a personal time management method. The Pomodoro is coming out of scientific studies which suggest
that human focus starts drop-down significantly after 20 minutes. It has four simple rules with an emphasis on maximal productivity:

1. Choose a task you would like to.
2. Work uninterrupted for 25 minutes.
3. Take a break for 5 minutes.
4. After four sessions, take a longer break.

You can find more information on [wikipedia](https://en.wikipedia.org/wiki/Pomodoro_Technique).

Countdown first 25 minutes when you should focus on your tasks:
![alt text](https://raw.githubusercontent.com/codekopf/pomodoro/master/pomodoro-work.png)

5 minutes break when you can procrastinate:  
![alt text](https://raw.githubusercontent.com/codekopf/pomodoro/master/pomodoro-break.png)

Loop repeat infinitely. If you leave and return, you can hit the reset button to reset the counter.    

## How to run it?

This project was generated with Angular CLI, so there is a lot of redundant code.

If you want to run module locally, first download it and then, if you have installed Angular CLI, just run in your terminal `ng serve` command in the download folder. Navigate to address `http://localhost:4200/` in your browser and have the tab opened during your work with the computer screen. 

If you want to develop other Angular apps alongside, rewrite port number in package.json or run `ng serve --port arbitrary_port_number`.  
 
If you are new to running Angular apps here is [official documentation](https://angular.io/guide/setup) for how to run the Angular app.

## Demo
I have build production version of this module and attached files into this GitHub repository. 
You can check this module straight from your browser anytime you want. Check the page http://htmlpreview.github.io/?https://github.com/codekopf/pomodoro/blob/master/dist/index.html .

## TODO
* Implement possibility to pick own duration
* Implement possibility to pick up 20 + 5 option session
* After four Pomodoro loops make 20 minutes break
* Have three buttons - Start, Stop, Reset - with similar functionality as https://tomato-timer.com/
* Have an option to see which loop (1-4) is currently looping 
* Fix favicons
