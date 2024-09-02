import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { contactoPage } from './contacto.page';

const routes: Routes = [
  {
    path: '',
    component: contactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class contactoPageRoutingModule {}
