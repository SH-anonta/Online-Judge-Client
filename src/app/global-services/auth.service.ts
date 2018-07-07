import {User} from '../global-models/user.model';

//todo: replace dummy authentication

// WARNING: This service is meant to be used by user service only! Do not use this service directly
export class AuthService {

  constructor() {}

  login(username: string, password: string){

    function authenticate(resolve, reject){
      if (password == 'password'){
        let user = new User(username, 'dummyEmail', username == 'admin');
        resolve(user);
      }
      else{
        reject();
      }
    }

    return new Promise<User>(authenticate);
  }

}
