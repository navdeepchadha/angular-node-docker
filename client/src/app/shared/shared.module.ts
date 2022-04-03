import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './components/cards/cards.component';
import { FilterArrayPipe } from './pipes/filter-array.pipe';



@NgModule({
  declarations: [
    DropdownFilterComponent,
    CardsComponent,
    FilterArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule
  ], exports: [
    DropdownFilterComponent,
    CardsComponent,
    FilterArrayPipe
  ]
})
export class SharedModule { }
