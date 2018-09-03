import {AuthService} from './auth.service';
import {User} from '../global-models/user.model';
import {Injectable} from '@angular/core';
import {UserRepositoryService} from './repository-services/user-repository.service';
import {s} from '@angular/core/src/render3';

export class LoginInfo{
  // these values are set in the server
  private static readonly ADMIN_UESR_TYPE_ENUM: Number = 0;
  private static readonly JUDGE_UESR_TYPE_ENUM: Number = 2;

  Id: number;
  UserName: string;
  UserType: number;
  LoginTime: Date;

  constructor(data: any){
    this.Id = data.Id;
    this.UserName = data.UserName;
    this.UserType = data.UserType;
    this.LoginTime = data.LoginTime;
  }

  public createUserObject(){
    return new User(this.UserName, '',
              this.UserType == LoginInfo.JUDGE_UESR_TYPE_ENUM,
              this.UserType == LoginInfo.ADMIN_UESR_TYPE_ENUM);
  }
}

@Injectable()
export class UserService {
  private _user: User= null;

  get user(): User{
    return this._user;
  }

  get user_id(): number{
    return this._user.id;
  }

  constructor(private authenticator: AuthService,
              private user_repository: UserRepositoryService){
    //todo remove statement before release, user is logged by default for ease of development only
    this.login('admin', 'password');
  }

  updateUserState(){
    let promise: Promise<LoginInfo> = this.user_repository.getUserState();

    promise.then((data: LoginInfo) =>{
      console.log('>>>>>', data);

      if(data != null){
        let login_info:LoginInfo = new LoginInfo(data);
        this._user = login_info.createUserObject();
      }
    });
  }

  userIsAuthenticated(){
    return this._user!=null;
  }

  login(username: string, password: string): Promise<any>{
    let auth_promise = this.authenticator.login(username, password);

    auth_promise.then((data) =>{
      this.updateUserState();
    });

    return auth_promise;
  }

  logout(){
    let promise:Promise<any> = this.authenticator.logout();
    promise.then(x=>{
      this._user= null;
    });
    return promise;
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
