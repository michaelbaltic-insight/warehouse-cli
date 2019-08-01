import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  // convenience getter for easy access to form fields
  get f() { return this.registration.controls; }
  registration: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  title = 'Register';

  ngOnInit() {
    this.registration = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset registration status
    this.authService.logout();

    // get return url from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  onRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registration.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register({
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      userName: this.f.userName.value,
      password: this.f.password.value
    })
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}