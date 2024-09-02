import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { zapatilla1PageRoutingModule } from './zapatilla1-routing.module';

import { zapatilla1Page } from './zapatilla1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    zapatilla1PageRoutingModule
  ],
  declarations: [zapatilla1Page]
})
export class zapatilla1PageModule {}
