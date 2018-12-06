import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users => (<any> users).map(u => new User(u)) )
      );
  }

}
