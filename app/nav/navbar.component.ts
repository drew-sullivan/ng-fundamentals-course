import { EventService } from './../events/shared/event.service';
import { ISession } from './../events/shared/event.model';
import { AuthService } from './../user/auth/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavbarComponent {

    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private auth: AuthService, private eventService: EventService) { };

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe
            (sess => this.foundSessions = sess);
        console.log(this.foundSessions);
    }    
}