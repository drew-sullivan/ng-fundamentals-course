import { CreateEventComponent } from './events/create-event/create-event.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/events-list/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent }, //must come before /events/:id
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]