import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards';
import { ManifestSearchComponent } from './manifest-search/manifest-search.component';
import { ManifestDetailsComponent } from './manifest-details/manifest-details.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';

const routes: Routes = [
  { path: 'inventory', component: ManifestSearchComponent, canActivate: [AuthGuard] },
  { path: 'inventory/manifest/:id', component: ManifestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'inventory/manifest/:id/items', component: InventoryItemsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
