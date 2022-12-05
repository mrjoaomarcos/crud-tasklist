import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = environment.urlBackEnd;

  constructor(private httpClient: HttpClient){ }

  get<T>(endpoint: string){
    return this.httpClient.get<T>(`${this.API}/${endpoint}`)
      .pipe(
        tap(),
        catchError(this.handleError<any>('get'))
      );
  }

  getById(endpoint: string, id: number){
    return this.httpClient.get(`${this.API}/${endpoint}/${id}`)
      .pipe(
        first(),
        tap(),
        catchError(this.handleError<any>('getById'))
      );
  }

  post<T>(endpoint: string, object: any){
    return this.httpClient.post<T>(`${this.API}/${endpoint}`, object)
      .pipe(
        first(),
        tap(),
        catchError(this.handleError<any>('post'))
      );
  }

  put(endpoint: string, id:number, object: any){
    return this.httpClient.put(`${this.API}/${endpoint}/${id}`, object )
      .pipe(
        first(),
        tap(),
        catchError(this.handleError<any>('put'))
      );
  }

  delete(endpoint: string, id:number){
    return this.httpClient.delete(`${this.API}/${endpoint}/${id}`)
      .pipe(
        first(),
        tap(),
        catchError(this.handleError<any>('delete'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
