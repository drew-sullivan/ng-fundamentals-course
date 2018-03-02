import { IEvent, ISession } from './../../shared/event.model';
import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    templateUrl: 'app/events/events-list/event-details/event-details.component.html',
    styleUrls: ['app/events/events-list/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
                this.event = event;
                this.addMode = false;
            });
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session:ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
} 