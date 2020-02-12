import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrapAngular';
  messages = [];
  onInput(event) {
    this.messages.push(event.target.value);
  }
  onClick() {
    console.log('hello');
  }
}
