import { EventsListResolver } from './events/events-list/events-list-resolver.service';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/events-list/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventRouteActivator } from './events/events-list/event-details/event-route-activator.component';

export const appRoutes: Routes = [
    { path: 'events',
      component: EventsListComponent,
      resolve: {
        events: EventsListResolver
      } 
    },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, //must come before /events/:id
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' } //When the path starts with user, load the UserModule from this path
]