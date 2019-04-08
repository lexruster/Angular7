import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  canClick() {
    return this.userName !== '';
  }

  onResetUser() {
    this.userName = '';
  }
}
