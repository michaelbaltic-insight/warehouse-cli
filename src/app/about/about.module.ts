import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../material.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }