import { IEvent } from './../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'app/events/events-list/events-list.component.html',
    styleUrls: ['app/events/events-list/events-list.component.css']
})
export class EventsListComponent implements OnInit {

    events: IEvent[];
    
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }
}