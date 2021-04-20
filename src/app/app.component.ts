import { Component } from '@angular/core';
import * as moment from 'moment';
import ICalendarCell from 'ng-event-schedule/lib/interfaces/calendar-cell.interface';
import ICalendarColumn from 'ng-event-schedule/lib/interfaces/calendar-column.interface';
import ICalendarItem from 'ng-event-schedule/lib/interfaces/calendar-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-event-schedule demo';
  notifications: { id: number, title: string}[] = [];
  notificationDuration = 4000;
  startHour = 10;
  endHour = 18;

  columns: ICalendarColumn[] = [
    {
      title: 'Dr. John Doe',
      items: [
        {
          title: 'Patient: Tom',
          start: this.getTime(10, 0),
          end: this.getTime(10, 30)
        },
        {
          title: 'Patient: Harry',
          start: this.getTime(11, 30),
          end: this.getTime(12, 15)
        },
        {
          title: 'Lunch with Jake',
          description: 'At the closest Starbucks',
          start: this.getTime(12, 30),
          end: this.getTime(14, 0)
        },
        {
          title: 'Prepare week reports',
          start: this.getTime(16, 0),
          end: this.getTime(18, 0)
        }
      ]
    },
    {
      title: 'Dr. Jane Doe',
      items: [
        {
          title: 'Analize day samples',
          start: this.getTime(10, 30),
          end: this.getTime(12, 0)
        },
        {
          title: 'Patient: Thomas',
          description: 'X-ray',
          start: this.getTime(13, 45),
          end: this.getTime(14, 45)
        },
      ]
    },
    {
      title: 'Dr. Richard Roe',
      items: [
        {
          title: 'Patient: Melissa',
          description: 'Bone fusion surgery on the right leg',
          start: this.getTime(10, 0),
          end: this.getTime(11, 15)
        },
        {
          title: 'Daily standup meeting',
          start: this.getTime(12, 30),
          end: this.getTime(12, 45)
        },
        {
          title: 'Patient: Tom',
          description: 'Soft tissue repair surgery on the right knee',
          start: this.getTime(15, 0),
          end: this.getTime(17, 30)
        },
      ]
    }
  ];

  onSelectItem(item: ICalendarItem): void {
    console.dir(item);
    this.createNotification(`Clicked '${item.title}'`);
  }
  
  onSelectCell(cell: ICalendarCell): void {
    console.dir(cell);
    const date = moment().startOf('day').add('hours', cell.hours);
    this.createNotification(`Clicked '${cell.columnTitle}' at ${date.format('HH:mm')}`);
  }

  private createNotification(title: string): void {
    const id = this.getEventId();
    this.notifications.push({ id, title});

    setTimeout(() => {
      this.notifications = this.notifications.filter(x => x.id !== id);
    }, this.notificationDuration);
  }

  private getEventId(): number {
    return this.notifications.length ? this.notifications[this.notifications.length - 1].id + 1 : 1;
  }

  private getTime(hours: number, minutes: number): moment.Moment {
    return moment().startOf('day').set({ hours, minutes});
  }
}
