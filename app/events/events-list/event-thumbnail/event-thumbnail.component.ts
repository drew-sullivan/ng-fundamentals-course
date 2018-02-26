import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/events-list/event-thumbnail/event-thumbnail.component.html',
    styleUrls: ['app/events/events-list/event-thumbnail/event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: any

    getStartTimeStyle(): Object {
        const isEarlyStart: boolean = this.event && this.event.time === '8:00 am';
        let startTimeStyle = {};
        if (isEarlyStart) {
            startTimeStyle = {color: '#003300', 'font-weight': 'bold'};
        }
        return startTimeStyle;
    }
}