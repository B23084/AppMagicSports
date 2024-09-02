import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { zapatilla4Page } from './zapatilla4.page';

const routes: Routes = [
  {
    path: '',
    component: zapatilla4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class zapatilla4PageRoutingModule {}
