import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { zapatilla2PageRoutingModule } from './zapatilla2-routing.module';

import { zapatilla2Page } from './zapatilla2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    zapatilla2PageRoutingModule
  ],
  declarations: [zapatilla2Page]
})
export class zapatilla2PageModule {}
