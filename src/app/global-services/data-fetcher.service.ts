

// this service fetches data from the server backend
import {User} from '../global-models/user.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DataFetcherService {

  constructor(private client: HttpClient) {

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

  getAnnouncementList(): Promise<any>{
    let promise = new Promise((resolve, reject) =>{
      let p = this.client.get('http://localhost:52774/api/announcements/1');
      p.subscribe(d => {
        resolve(d);
      });
    });

    return promise;
  }
}
