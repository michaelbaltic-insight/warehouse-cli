import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerErrorComponent } from './server-error.component';

const routes: Routes = [
  { path: '500', component: ServerErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerErrorRoutingModule { }
