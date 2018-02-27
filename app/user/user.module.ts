import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        
    ]
})
export class UserModule {

}