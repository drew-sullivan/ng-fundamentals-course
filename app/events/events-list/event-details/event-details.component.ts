import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: '/app/events/events-list/event-details/event-details.component.html',
    styleUrls: ['/app/events/events-list/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

    event: any;
    
    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }

} 