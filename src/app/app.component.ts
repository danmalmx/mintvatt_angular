import { Component } from '@angular/core';
import { DayGrid } from "@fullcalendar/daygrid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MintTvätt';
  calendarPlugins: [DayGrid];
}
