import { EventService } from './../shared/event.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css', 'app/user/profile/profile.component.css']
})
export class CreateEventComponent {

    isDirty: boolean = true;
    event: any;

    constructor(private router: Router, private eventService: EventService) { }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel():void {
        this.router.navigate(['/events']);
    };
}