import { Router } from '@angular/router';
import { ISession, restrictedWords } from './../../../shared/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/events-list/event-details/session/create-session.component.html',
    styleUrls: ['', 'app/user/profile/profile.component.css']
})
export class CreateSessionComponent implements OnInit {

    constructor(private router: Router) { }

    @Output() saveNewSession = new EventEmitter(); 
    @Output() cancelAddSession = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        const reqd = Validators.required;
        this.name = new FormControl('', reqd);
        this.presenter = new FormControl('', reqd);
        this.duration = new FormControl('', reqd);
        this.level = new FormControl('', reqd);
        this.abstract = new FormControl('', [reqd, Validators.maxLength(400), restrictedWords()]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValues: any) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.duration,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit();
        this.router.navigate(['events']);
    }
}