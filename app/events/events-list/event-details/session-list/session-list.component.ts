import { ISession } from './../../../shared/event.model';
import { ISession } from './../../../shared/index';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/events-list/event-details/session-list/session-list.component.html',
})
export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        // called whenever one of the @Input() values changes
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0); // Slice(0) creates a complete duplicate of the array with all its elemenets
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
        }
    }
}

const sortByNameAsc = (s1: ISession, s2: ISession): number => {
    let comparator = -1;
    if (s1.name > s2.name) {
        comparator = 1;
    } else if (s1.name === s2.name) {
        comparator = 0;
    } 
    return comparator;
}

const sortByVotesDesc = (s1: ISession, s2: ISession): number => s2.voters.length - s1.voters.length;