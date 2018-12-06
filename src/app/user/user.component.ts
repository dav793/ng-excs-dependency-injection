import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MediatorService } from '../mediator.service';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private mediatorService: MediatorService
  ) { }

  ngOnInit() {
    this.fetchUsers().subscribe();

    this.mediatorService.mandarValor('user-app', 100);
    this.mediatorService.mandarValor('user-another', 'hola');
  }

  fetchUsers(): Observable<any> {
    return this.userService.getUsers().pipe(
      switchMap((users: User[]) => {
        this.users = users;
        return of(null);
      })
    );
  }

}
