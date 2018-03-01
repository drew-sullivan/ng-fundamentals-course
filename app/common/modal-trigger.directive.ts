import { JQ_TOKEN } from './jQuery.service';
import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

@Directive({
    selector: '[modal-trigger]' // [] means that it's an attribute, not a tag
})
export class ModalTriggerDirective implements OnInit {

    el: HTMLElement; //global js type

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) { //ElementRef gets element the reference is on
        this.el = ref.nativeElement;
     }

    ngOnInit() {
        this.el.addEventListener('click', e => this.$('#simple-modal').modal({}));
    }
}