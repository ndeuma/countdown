import { Component } from '@angular/core';
import { Event } from './event';
@Component({
  selector: 'countdown-app',
  templateUrl: '/app/app.html'
})
export class AppComponent {
  events = [
    new Event("Stadtlauf Nürnberg", new Date(2016, 9, 3, 13, 30, 0)),
    new Event("Frankfurt-Marathon", new Date(2016, 9, 30, 9, 0, 0)),
  ];

  addEvent() {
    this.events.push(new Event("Jahresende", new Date(2016, 11, 31, 23, 59, 59)));
  }

  deleteEvent(event:Event) {
    var index = this.events.indexOf(event);
    this.events.splice(index, 1);
  }
}
