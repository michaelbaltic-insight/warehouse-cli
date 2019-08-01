import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../material.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }