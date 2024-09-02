import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { zapatilla3PageRoutingModule } from './zapatilla3-routing.module';

import { zapatilla3Page } from './zapatilla3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    zapatilla3PageRoutingModule
  ],
  declarations: [zapatilla3Page]
})
export class zapatilla3PageModule {}
