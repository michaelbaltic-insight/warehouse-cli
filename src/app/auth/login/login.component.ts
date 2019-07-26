import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  // convenience getter for easy access to form fields
  get f() { return this.login.controls; }
  login: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  title = 'Login';

  ngOnInit() {
    this.login = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  onLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login({
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
