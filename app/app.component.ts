import { Component } from '@angular/core';
import { Event } from './event';
@Component({
  selector: 'countdown-app',
  templateUrl: '/app/app.html'
})
export class AppComponent {
  events = [
    new Event("Stadtlauf Nürnberg", "72 Tage, 21:56:10"),
    new Event("Frankfurt-Marathon", "100 Tage, 14:04:33"),
  ]
}
