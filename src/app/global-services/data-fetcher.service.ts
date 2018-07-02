

// this service fetches data from the server backend
import {User} from '../global-models/user.model';

export class DataFetcherService {

  constructor() {

  }

  getUserProfileData(id: string){
    return {
      username : 'Anonta',
      email : 'user@user.net',
    };
  }


  getAllUsersList(): Promise<User[]>{
    return new Promise<User[]>((resolve, reject)=>{
      let users = [
        new User('Sally', 'sally@jamal.com'),
        new User('John', 'john@jamal.com'),
        new User('Rofik', 'rofik@jamal.com'),
        new User('kamal', 'kamal@jamal.com'),
        new User('Arif', 'arif@jamal.com'),
        new User('Bob', 'bob@jamal.com'),
      ];

      resolve(users);
    });
  }
}
