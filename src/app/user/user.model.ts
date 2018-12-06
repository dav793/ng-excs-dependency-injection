export class User {

  id: number;
  name: string;
  username: string;
  email: string;

  constructor(data: any) {
    this.id = data.id || null;
    this.name = data.name || null;
    this.username = data.username || null;
    this.email = data.email || null;
  }

}
