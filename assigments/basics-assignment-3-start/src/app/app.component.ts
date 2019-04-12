import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickState = false;
  clickNum = 0;
  clicks = new Map();

  onClick() {
    this.clickState = !this.clickState;
    this.clickNum++;
    this.clicks.set(this.clickNum, new Date().toISOString());
  }

  getBackground(item: number) {
    if (item >= 5) {
      return 'blue';
    }
  }
}
