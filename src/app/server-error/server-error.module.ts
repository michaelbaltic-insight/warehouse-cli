import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../material.module';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent]
})
export class ServerErrorModule { }
