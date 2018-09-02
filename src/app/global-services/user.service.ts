import {AuthService} from './auth.service';
import {User} from '../global-models/user.model';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService {
  private _user: User= null;

  get user(): User{
    return this._user;
  }

  get user_id(): number{
    return this._user.id;
  }

  constructor(private authenticator: AuthService){
    //todo remove statement before release, user is logged by default for ease of development only
    this.login('admin', 'password');
  }

  userIsAuthenticated(){
    return this._user!=null;
  }

  login(username: string, password: string): Promise<User>{
    let auth_promise = this.authenticator.login(username, password);

    auth_promise.then((user: User) =>{
      this._user = user;
    });

    return auth_promise;
  }

  logout(){
    this._user = null;
    //todo clear session on the server side
  }

  isAdmin(): boolean{
    return this.user && this.user.isAdmin;
  }

  // todo these are dummy and only check if user is admin or judge
  isAuthenticated(){
    return this.user != null;
  }

  isAuthorizedToCreateContest(){
    return this.user && (this.user.isAdmin || this.user.isJudge);
  }

  isAuthorizedToEditContest(contest_id: number){
    return this.user && (this.user.isAdmin || this.user.isJudge);
  }

  isAuthorizedToCreateProblem(){

  }

  isAuthorizedToEditProblem(problem_id: string){
    return this.user && (this.user.isAdmin || this.user.isJudge);
  }

  isAuthorizedToCreateAnnouncements(){
    return this.user && this.user.isAdmin;
  }

  isAuthorizedToAccessProblemFiles(problem_id: number){
    return this.user && this.user.isAdmin;
  }

  isAuthorizedToEditUserType(){
    return this.user && this.user.isAdmin;
  }
}
