import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css']
})
export class CreateEventComponent {

    constructor(private router: Router) { }

    cancel():void {
        this.router.navigate(['/events']);
    };
}