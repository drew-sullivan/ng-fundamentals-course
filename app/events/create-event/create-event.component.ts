import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css', 'app/user/profile/profile.component.css']
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router) { }

    saveEvent(formValues: any) {
        console.log(formValues);
    }

    cancel():void {
        this.router.navigate(['/events']);
    };
}