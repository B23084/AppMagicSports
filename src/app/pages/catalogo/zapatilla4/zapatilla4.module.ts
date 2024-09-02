import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { zapatilla4PageRoutingModule } from './zapatilla4-routing.module';

import { zapatilla4Page } from './zapatilla4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    zapatilla4PageRoutingModule
  ],
  declarations: [zapatilla4Page]
})
export class zapatilla4PageModule {}
