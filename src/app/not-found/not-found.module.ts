import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../material.module';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
