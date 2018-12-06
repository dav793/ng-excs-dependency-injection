import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user.model';
import { MockedUsers } from './user-mock.model';

@Injectable()
export class UserMockService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(MockedUsers);
  }

}
