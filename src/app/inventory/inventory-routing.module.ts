import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { AuthGuard } from '../auth/guards';

const routes: Routes = [
  { path: 'inventory', component: InventorySearchComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
