import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TimePipe } from '../pipes/time.pipe';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    TimePipe,
    StoreComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    SummaryComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class PagesModule { }
