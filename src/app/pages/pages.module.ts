import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TimePipe } from '../pipes/time.pipe';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    TimePipe,
    ExampleComponent,
    LoginComponent,
    SignupComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class PagesModule { }
