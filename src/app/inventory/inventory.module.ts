import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../material.module';
import { InventoryRoutingModule } from './inventory-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    InventoryRoutingModule
  ],
  declarations: [InventorySearchComponent]
})
export class InventoryModule { }
