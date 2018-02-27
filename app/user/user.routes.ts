import { Component } from '@angular/core';
import { LoginComponent } from './login/index';
import { ProfileComponent } from './profile/index';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
]