import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'http://localhost:8060/api/user/byId?id=6701771a358f08cadb718c57';

  constructor(private http: HttpClient) {}

  getById(): Observable<User>{
    return this.http.get<User>(this.api).pipe(
      map((data: User) => data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never>{
    console.error('Error occurred:', error);
    return throwError(() => new Error('Someting went wrong: please try again later.'))
  }
}
