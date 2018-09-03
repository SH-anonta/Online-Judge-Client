

// this service fetches data from the server backend
import {User} from '../global-models/user.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DataFetcherService {
  HOST_NAME: string= 'http://localhost:52774';

  constructor(private client: HttpClient) {}

  public get(uri: string, params?: any, headers?: any): Promise<any>{
    let promise = new Promise((resolve, reject)=> {
      let url = [this.HOST_NAME,uri].join('/');


        let p = this.client.get(url, {
          params : params,
          headers : headers,
        });

        p.subscribe((data : any)=>{
            resolve(data);
          },
          (error: HttpErrorResponse) => {
              reject(error);
          });
    });

    return promise;
  }


  public post(uri: string, data?: any, params?: any, headers?: any): Promise<any>{
    let promise = new Promise((resolve, reject)=> {
      let url = [this.HOST_NAME,uri].join('/');

      let p = this.client.post(url, data, {
        params : params,
        headers : headers,
      });

      p.subscribe((data : any)=>{
          resolve(data);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        });
    });

    return promise;
  }


  getUserProfileData(id: string){
    return {
      username : 'Anonta',
      email : 'user@user.net',
    };
  }


  getAllUsersList(): Promise<User[]>{
    return new Promise<User[]>((resolve, reject)=>{
      let users = [];

      resolve(users);
    });
  }

}
