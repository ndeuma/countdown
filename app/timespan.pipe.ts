import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timespan'})
export class TimespanPipe implements PipeTransform {
  transform(milliseconds: number, daysSingular: string, daysPlural: string): string {
    let seconds = Math.floor(milliseconds / 1000);
    let days = Math.floor(seconds / (24 * 3600));
    let remainder = seconds % (24 * 3600);
    let hours = Math.floor(remainder / 3600);
    remainder = remainder % 3600;
    let minutes = Math.floor(remainder / 60);
    remainder = Math.floor(remainder % 60);
    return this.getDays(days, daysSingular, daysPlural) +
      this.leadingZero(hours) + ":" +
      this.leadingZero(minutes) + ":" +
      this.leadingZero(remainder);
  }

  private getDays(days: number, daysSingular: string, daysPlural: string): string {
    if (days == 0)
      return "";
    else if (days == 1)
      return days + " " + daysSingular + ", ";
    else
        return days + " " + daysPlural + ", ";
  }

  private leadingZero(n: number): string {
    return (n < 10) ? "0" + n : "" + n;
  }
}
