import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotrRoutingModule } from './lotr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CharactersListComponent } from './characters-list/characters-list.component';


@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    LotrRoutingModule,
    SharedModule
  ]
})
export class LotrModule { }
