import { IEvent } from './../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'app/events/events-list/events-list.component.html',
    styleUrls: ['app/events/events-list/events-list.component.css']
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService,
                private toastr: ToastrService,
                private route: ActivatedRoute) { }

    handleThumbnailClick(eventName: string): void {
        this.toastr.success(eventName);
    }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }
}