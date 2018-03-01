import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: 'app/common/collapsible-well/collapsible-well.component.html',
    styleUrls: ['app/common/collapsible-well/collapsible-well.component.css']
})
export class CollapsibleWellComponent {
    
    visible: boolean = true;

    toggleContent() {
        this.visible =  !this.visible;
    }
}