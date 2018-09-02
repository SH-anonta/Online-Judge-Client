import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../global-services/user.service';
import {LinkGeneratorService} from '../global-services/link-generator.service';

@Injectable()
export class IsAuthenticated implements CanActivate{

  constructor(private user_service: UserService,
              private router: Router,
              private link_generator: LinkGeneratorService){}

  canActivate(){
    let is_authenticated: boolean = this.user_service.isAuthenticated();

    if(!is_authenticated){
      this.router.navigate(this.link_generator.loginPage());
    }

    return is_authenticated;
  }
}
