import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskFormComponent } from './task-form/task-form.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path:'', component: TasklistComponent},
  { path:'new', component: TaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasklistRoutingModule { }
