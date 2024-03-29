import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TOASTR_TOKEN, Toastr } from '../../common/index';
import { AuthService } from './../auth/auth.service';

@Component({
  templateUrl: 'app/user/profile/profile.component.html',
  styleUrls: ['app/user/profile/profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService,
              private router:Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) { }
    
  ngOnInit() {
    let validators = [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')
    ];
    this.firstName = new FormControl(this.auth.currentUser.firstName, validators);
    this.lastName = new FormControl(this.auth.currentUser.lastName, validators);
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
      this.toastr.success('Profile Saved');
    }
  }

  isValidLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  isValidFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
}