import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ProgressBarModule} from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    ProgressBarModule,
    RatingModule,
    SliderModule,
    StyleClassModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
