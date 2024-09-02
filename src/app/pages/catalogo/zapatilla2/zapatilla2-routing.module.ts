import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { zapatilla2Page } from './zapatilla2.page';

const routes: Routes = [
  {
    path: '',
    component: zapatilla2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class zapatilla2PageRoutingModule {}
