import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/events-list/event-thumbnail/event-thumbnail.component.html',
    styleUrls: ['app/events/events-list/event-thumbnail/event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: any
}