import {User} from '../global-models/user.model';
import {createInjectable} from '@angular/compiler/src/core';
import {Injectable} from '@angular/core';
import {DataFetcherService} from './data-fetcher.service';

//todo: replace dummy authentication

// WARNING: This service is meant to be used by user service only! Do not use this service directly

// should not be exported
class LoginData {
  Username: string;
  Password: string;

  constructor(Username: string, Password: string){
    this.Username = Username;
    this.Password = Password;
  }
}

@Injectable()
export class AuthService {
  //todo remove dummy_users
  private dummy_users= [
    {username : 'anonta', password : 'password'},
    {username : 'admin', password : 'password'},
    {username : 'judge', password : 'password'},
  ];

  constructor(private data_fetcher: DataFetcherService) {}

  login(username: string, password: string){
    return this.data_fetcher.post('api/login', new LoginData(username, password));
  }

  logout() {
    return this.data_fetcher.post('api/logout');
  }
}
