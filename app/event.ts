export class Event {
  constructor(
    public name: string,
    private date: Date) { }

  public get timeRemaining(): number {
    var currentDate = new Date();
    return this.date.getTime() - currentDate.getTime();
  }
}
