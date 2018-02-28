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
        } from './events/index';
import { AuthService } from './user/auth/auth.service';
import { EventsAppComponent } from './events-app.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

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
        Error404Component
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        AuthService,
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