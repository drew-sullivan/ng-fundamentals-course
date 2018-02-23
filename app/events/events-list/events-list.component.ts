import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list/events-list.component.html'
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '1/1/2018',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England',
        }
    }

}