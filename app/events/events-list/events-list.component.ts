import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list/events-list.component.html',
    styleUrls: ['app/events/events-list/events-list.component.css']
})
export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService) { }

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }
}