import { User } from './user.model';

export const MockedUsers: User[] = [

  new User({
    id: 1,
    name: 'Jake Peralta',
    username: 'jperalta',
    email: 'jperalta@nypd.gov'
  }),

  new User({
    id: 2,
    name: 'Gob Bluth',
    username: 'gbluth',
    email: 'gbluth@bluthcompany.com'
  }),

  new User({
    id: 3,
    name: 'Barney Stinson',
    username: 'bstinson',
    email: 'barney@gnb.com'
  }),

];
