import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  percent : number = 0;

  onPercentChange (value : number) {
    this.percent = value;
  }
}
