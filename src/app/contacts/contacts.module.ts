import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ListComponent,
    AddComponent,
    ViewComponent
  ],
  exports: [ListComponent, AddComponent, ViewComponent]
})
export class ContactsModule { }
