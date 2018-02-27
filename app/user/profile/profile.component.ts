import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  templateUrl: 'app/user/profile/profile.component.html',
  styleUrls: ['app/user/profile/profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private auth: AuthService, private router:Router) { }
    
  ngOnInit() {
    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any) { 
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
}