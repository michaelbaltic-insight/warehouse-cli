import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  // convenience getter for easy access to form fields
  get f() { return this.resetPassword.controls; }
  resetPassword: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  title = 'Reset Password';

  ngOnInit() {
    const passwordResetToken: string = this.activeRoute.snapshot.params.passwordResetToken;
    this.resetPassword = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      passwordResetToken: [{ value: passwordResetToken, disabled: true }, Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onResetPassword() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPassword.invalid) {
      return;
    }

    this.loading = true;
    this.authService.resetPassword({
      userName: this.f.userName.value,
      email: this.f.email.value,
      passwordResetToken: this.f.passwordResetToken.value,
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
