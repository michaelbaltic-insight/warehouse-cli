import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../material.module';

import { LoginFormComponent } from './login-form/login-form.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginFormComponent],
  providers: [
    AuthGuard,
    AuthService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ]
})
export class AuthModule { }