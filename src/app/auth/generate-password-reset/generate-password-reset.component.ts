import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services';

@Component({
  selector: 'app-generate-password-reset',
  templateUrl: './generate-password-reset.component.html',
  styleUrls: ['./generate-password-reset.component.scss']
})
export class GeneratePasswordResetComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  // convenience getter for easy access to form fields
  get f() { return this.generatePasswordReset.controls; }
  generatePasswordReset: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  title = 'Generate Password Reset';

  ngOnInit() {
    this.generatePasswordReset = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onGeneratePasswordReset() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.generatePasswordReset.invalid) {
      return;
    }

    this.loading = true;
    this.authService.generatePasswordReset({
      userName: this.f.userName.value,
      email: this.f.email.value
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
