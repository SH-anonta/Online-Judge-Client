export class User {
  readonly username: string;
  readonly email: string;
  readonly isAdmin: boolean;

  constructor(username: string, email: string, admin= false){
    this.username = username;
    this.email= email;
    this.isAdmin= admin;
  }
}
