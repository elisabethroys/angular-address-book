import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './contacts/list/list.component';
import { AddComponent } from './contacts/add/add.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent},
  { path: 'contacts/add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
