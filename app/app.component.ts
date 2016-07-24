import { Component, ChangeDetectorRef } from '@angular/core';
import { Event } from './event';
import { TimespanPipe } from './timespan.pipe';

@Component({
  selector: 'countdown-app',
  templateUrl: '/app/app.html',
  pipes: [TimespanPipe]
})
export class AppComponent {
  events = [
    new Event("Stadtlauf Nürnberg", new Date(2016, 9, 3, 13, 30, 0)),
    new Event("Frankfurt-Marathon", new Date(2016, 9, 30, 9, 0, 0)),
  ];

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    // Update the component's view whenever the timer fires
    setInterval(() => {
      ref.detectChanges();
    }, 1000);
  }

  addEvent() {
    this.events.push(new Event("demnächst", new Date(2016, 6, 25, 12, 0, 0)));
  }

  deleteEvent(event:Event) {
    var index = this.events.indexOf(event);
    this.events.splice(index, 1);
  }
}
