export class User {
  readonly id: number;
  readonly username: string;
  readonly isAdmin: boolean;
  readonly isJudge: boolean;

  constructor(username: string,
              id: number,
              judge= false,
              admin= false){
    this.id= id;   //todo replace with actual value
    this.username = username;
    this.isAdmin= admin;
    this.isJudge= judge;
  }
}
