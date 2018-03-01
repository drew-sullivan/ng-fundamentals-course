import { JQ_TOKEN } from './jQuery.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[modal-trigger]' // [] means that it's an attribute, not a tag
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement; //global js type
    @Input('modal-trigger') modalId: string; //'modal-trigger' is being aliased as modalId

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) { //ElementRef gets element the reference is on
        this.el = ref.nativeElement;
     }

    ngOnInit() {
        this.el.addEventListener('click', e => this.$(`#${this.modalId}`).modal({}));
    }
}