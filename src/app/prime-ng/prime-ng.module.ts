import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  exports: [ButtonModule, MenubarModule, InputTextModule, TableModule, StyleClassModule, CheckboxModule],
})
export class PrimeNgModule {}
