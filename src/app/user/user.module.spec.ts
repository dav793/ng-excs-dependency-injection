import { TestBed, async } from '@angular/core/testing';

import { UserModule } from './user.module';

describe('UserModule', () => {

  let userModule: UserModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule
      ],
      declarations: [],
    }).compileComponents();
  }));

  it('should create an instance', () => {
    userModule = TestBed.get(UserModule);
    expect(userModule).toBeTruthy();
  });

});
