import { Component } from '@angular/core';
// import { Calendar } from '@fullcalendar/angular/fullcalendar-angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MinTvättTid';
  calendarPlugins = [dayGridPlugin];
  resources: [];
}
