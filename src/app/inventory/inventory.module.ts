import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../material.module';

import { InventoryRoutingModule } from './inventory-routing.module';

import { ManifestSearchComponent } from './manifest-search/manifest-search.component';
import { ManifestDetailsComponent } from './manifest-details/manifest-details.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    InventoryRoutingModule
  ],
  declarations: [
    ManifestSearchComponent,
    ManifestDetailsComponent,
    InventoryItemsComponent
  ]
})
export class InventoryModule { }
