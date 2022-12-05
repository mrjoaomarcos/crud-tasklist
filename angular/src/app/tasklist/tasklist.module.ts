import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist/tasklist.component';



@NgModule({
  declarations: [
    TasklistComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    TasklistRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TasklistModule { }
