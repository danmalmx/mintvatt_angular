import { Component } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MinTvätt';
  calendarPlugins = [dayGridPlugin];

}

// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');

// let calendar = new Calendar(calendarEl, {
//     plugins: [ DayGrid ],
//     defaultView: 'dayGridMonth'
//   });

//    calendar.render();
// });