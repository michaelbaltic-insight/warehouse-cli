import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../services';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  // convenience getter for easy access to form fields
  get f() { return this.changePassword.controls; }
  changePassword: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  title = 'Change Password';

  ngOnInit() {
    this.changePassword = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onChangePassword() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changePassword.invalid) {
      return;
    }

    this.loading = true;
    this.userService.changePassword({
      userName: this.f.userName.value,
      email: this.f.email.value,
      currentPassword: this.f.currentPassword.value,
      newPassword: this.f.newPassword.value
    })
      .pipe(first())
      .subscribe(
        data => {
          alert('success');
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
