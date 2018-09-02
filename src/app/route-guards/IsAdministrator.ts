import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../global-services/user.service';
import {ToastsManager} from 'ng6-toastr';

@Injectable()
export class IsAdministrator implements CanActivate{

  constructor(private user_service: UserService){}

  canActivate(){
    return this.user_service.isAdmin();
  }
}
