import { catchError, of, throwError } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TasklistService } from '../services/tasklist.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TasklistService,
    private snackBar: MatSnackBar
    ){
    this.form = this.formBuilder.group({
      name:[null],
      cost:[null],
      date:[null],
      sorting:[null]
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .pipe(
      catchError(err => {
        this.snackBar.open("Erro ao cadastrar");
        return of([]);
      })
    )
    .subscribe(data =>{
      console.log(data);
    });
  }

  onCancel(){

  }

  onError(){

  }

}
