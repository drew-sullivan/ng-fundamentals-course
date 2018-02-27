import { IEvent } from './../../shared/event.model';
import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/events/events-list/event-details/event-details.component.html',
    styleUrls: ['app/events/events-list/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

    event: IEvent;
    
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id: number = Number(this.route.snapshot.params['id']);
        this.event = this.eventService.getEvent(id);
    }
} 