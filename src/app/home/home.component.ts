import { Component } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns'
import { de } from 'date-fns/locale';
import { AgeFormat } from './age-format';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /**
   * Paul's birthday
   */
  public readonly birthday: Date = new Date(2022, 7, 30, 8, 29);
  /**
   * The age string to display
   */
  public displayedAge: string = "";
  /**
   * The age format to use
   * @private
   */
  private ageFormat: AgeFormat = AgeFormat.AbsoluteYears;

  constructor() {
    this.calculateDisplayedAge();
    setInterval(() => {
      this.calculateDisplayedAge();
    }, 1000);
  }

  /**
   * Switches the age format
   */
  switchAgeFormat() {
    this.ageFormat = (this.ageFormat + 1) % 6;
    this.calculateDisplayedAge();
  }

  /**
   * Calculates the displayed age
   */
  calculateDisplayedAge() {
    switch (this.ageFormat) {
      case AgeFormat.AbsoluteYears:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'year',
          roundingMethod: 'floor'
        });
        break;
      case AgeFormat.AbsoluteMonths:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'month'
        });
        break;
      case AgeFormat.AbsoluteDays:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'day'
        });
        break;
      case AgeFormat.AbsoluteHours:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'hour'
        });
        break;
      case AgeFormat.AbsoluteMinutes:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'minute'
        });
        break;
      case AgeFormat.AbsoluteSeconds:
        this.displayedAge = formatDistanceToNowStrict(this.birthday, {
          locale: de,
          unit: 'second'
        });
        break;
    }
  }
}
