import {AuthService} from './auth.service';
import {User} from '../global-models/user.model';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService {
  private _user: User= null;

  get user(): User{
    return this._user;
  }

  constructor(private authenticator: AuthService){
    //todo remove before production, only aplaced for ease of development
    this.login('admin', 'password');
  }

  userIsAuthenticated(){
    return this._user !=null;
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

//  Authorization checking
  authorizedToViewAdminPages(): boolean{
    return this.user && this.user.isAdmin;
  }

}
