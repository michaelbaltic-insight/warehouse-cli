import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards';
import { ManifestSearchComponent } from './manifest-search/manifest-search.component';
import { ManifestDetailsComponent } from './manifest-details/manifest-details.component';

const routes: Routes = [
  { path: 'inventory', component: ManifestSearchComponent, canActivate: [AuthGuard] },
  { path: 'inventory/manifest/details/:id', component: ManifestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'inventory/manifest/details/:id/add', component: ManifestDetailsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
