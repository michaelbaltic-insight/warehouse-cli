import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { CustomMaterialModule } from '../material.module';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AlertDialogComponent,
    ConfirmationDialogComponent,
    PromptDialogComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AlertDialogComponent,
    ConfirmationDialogComponent,
    PromptDialogComponent
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmationDialogComponent,
    PromptDialogComponent
  ],
})
export class CoreModule { }
