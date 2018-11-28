import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  // set a property that holds a random colour for our style
randomcolor = this.getRandomColor();

 // function to get random colours - a random generator function
public getRandomColor() {
 const letters = '0123456789ABCDEF'.split('');
 let color = ' # ';
 for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }

 return color;

}

 // function to set a new random color
setColor() {
  this.randomcolor = this.getRandomColor();

}

  constructor() { }

  public ngOnInit() {
  }
}
