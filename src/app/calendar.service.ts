import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }
  getData(): Observable<any[]> {
    const data = [
      { start: '2019-11-20', title: 'Boka tid' },
      { start: '2019-11-21', title: 'Boka tid' }
    ];
    return of (data);
  }
}
