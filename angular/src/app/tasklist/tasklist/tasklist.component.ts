import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';

import { Task } from '../model/task';
import { TasklistService } from './../services/tasklist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {

  tasks$: Observable<Task[]>;
  displayedColumns = ['id','name', 'cost', 'date', 'actions'];

  constructor(
    private taskslistService: TasklistService,
    public dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute
  ){
    this.tasks$ = this.taskslistService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar tarefas!')
        return of([])
      })
    );
  }

  onError(errorMsg: string)
  {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
