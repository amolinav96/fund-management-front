import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private api = 'http://localhost:8060/api/fund';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this.api}/all`).pipe(
      map((data: Fund[]) => data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never>{
    console.error('Error occurred:', error);
    return throwError(() => new Error('Someting went wrong: please try again later.'))
  }
}
