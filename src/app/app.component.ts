import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MinTvättTid';
  calendarPlugins = [dayGridPlugin];
  calendarEvents: any[] = [];

  constructor(private service: CalendarService) {

  }

  ngOnInit() {
    this.service.getData().subscribe(data => this.calendarEvents = data);
  }
}