import { ToastrService } from './../../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list/events-list.component.html',
    styleUrls: ['app/events/events-list/events-list.component.css']
})
export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService,
                private toastr: ToastrService) { }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName);
    }

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }
}