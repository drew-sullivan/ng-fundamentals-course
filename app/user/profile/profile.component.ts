import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';

@Component({
  templateUrl: 'app/user/profile/profile.component.html',
  styleUrls: ['app/user/profile/profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService, private router:Router) { }
    
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  isValidLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  isValidFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
}