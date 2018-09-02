import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../global-services/user.service';

@Injectable()
export class IsNotAuthenticated implements CanActivate{

  constructor(private user_service: UserService){}

  canActivate(){
    return !this.user_service.isAuthenticated();
  }
}
