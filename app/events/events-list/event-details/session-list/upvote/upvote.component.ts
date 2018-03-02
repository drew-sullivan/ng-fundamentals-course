import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/events-list/event-details/session-list/upvote/upvote.component.html',
    styleUrls: ['app/events/events-list/event-details/session-list/upvote/upvote.component.css']
})
export class UpvoteComponent {

    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }

}