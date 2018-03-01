import { ISession } from './../../../shared/index';
import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/events-list/event-details/session-list/session-list.component.html',
})
export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
        }
    }
}