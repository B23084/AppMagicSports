import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { zapatilla1Page } from './zapatilla1.page';

const routes: Routes = [
  {
    path: '',
    component: zapatilla1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class zapatilla1PageRoutingModule {}
