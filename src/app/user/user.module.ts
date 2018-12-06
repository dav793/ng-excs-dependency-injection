import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { UserService } from './user.service';
import { UserMockService } from './user-mock.service';

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [

    // class provider
    // { provide: UserService, useClass: UserMockService }

    // factory provider
    { provide: UserService, useFactory: (http: HttpClient) => {
      if (environment.envName === 'qa')
        return new UserMockService();
      else
        return new UserService(http);
    }, deps: [HttpClient] }

  ]
})
export class UserModule { }
