import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService) { }

    login(formValues: any): void {
        this.authService.loginUser(formValues.userName, formValues.password);
    }
}