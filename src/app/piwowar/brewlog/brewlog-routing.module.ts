import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewlogComponent } from './brewlog.component';

const routes: Routes = [
  {path: "", component: BrewlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrewlogRoutingModule { }
