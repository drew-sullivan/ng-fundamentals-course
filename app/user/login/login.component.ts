import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css']
})
export class LoginComponent {

    login(formValues: string) {
        console.log(formValues);
    }
}