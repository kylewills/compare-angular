import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  toggleNav: false;

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

}
