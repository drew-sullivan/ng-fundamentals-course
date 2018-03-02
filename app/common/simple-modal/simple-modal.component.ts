import { JQ_TOKEN } from './../jQuery.service';
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal/simple-modal.component.html',
    styleUrls: ['app/common/simple-modal/simple-modal.component.css']
})
export class SimpleModalComponent {

    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}