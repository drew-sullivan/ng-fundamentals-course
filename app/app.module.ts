import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { EventService,
         EventRouteActivator,
         EventsListResolver,
         EventDetailsComponent,
         CreateEventComponent,
         EventThumbnailComponent,
         EventsListComponent,
         CreateSessionComponent,
         SessionListComponent,
         DurationPipe
        } from './events/index';
import { AuthService } from './user/auth/auth.service';
import { EventsAppComponent } from './events-app.component';
import { TOASTR_TOKEN, 
         Toastr,
         CollapsibleWellComponent,
         JQ_TOKEN,
         SimpleModalComponent,
         ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavbarComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        EventRouteActivator,
        EventsListResolver,
        AuthService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery},
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}