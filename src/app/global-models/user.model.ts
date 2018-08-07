export class User {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly isAdmin: boolean;
  readonly isJudge: boolean;

  constructor(username: string, email: string, judge= false, admin= false){
    this.id= 1;   //todo replace with actual value
    this.username = username;
    this.email= email;
    this.isAdmin= admin;
    this.isJudge= judge;
  }
}
