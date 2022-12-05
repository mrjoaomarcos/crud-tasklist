import { first } from 'rxjs';
import { ApiService } from './../../shared/services/api.service';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  private readonly endpoint = 'tasks'
  constructor(private apiService: ApiService) { }

  list()
  {
    return this.apiService.get<Task[]>(this.endpoint);
  }

  save(record: Task){
    return this.apiService.post<Task>(this.endpoint, record);
  }
}
