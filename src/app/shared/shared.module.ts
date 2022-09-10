import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
