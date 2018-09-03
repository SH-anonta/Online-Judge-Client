import {DataFetcherService} from '../data-fetcher.service';
import {Injectable} from '@angular/core';

export class UserTypeData{
  Id: number;
  Name: string;
}

export class UserDetailsData{
  Id: number;
  UserName: string;
  UserType: string;
  UserTypeId: number;
  Email: string;
}

export class UserEditFormData {
  UserType: number;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export class UserRegistrationFormData {
  UserName: string;
  UserType: number;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

@Injectable()
export class UserRepositoryService {


  constructor(private data_fetcher: DataFetcherService){
  }

  getUserData(user_id:number): Promise<UserDetailsData>{
    return this.data_fetcher.get(`api/users/${user_id}`);
  }

  getUserTypes(): Promise<UserTypeData[]>{
    return this.data_fetcher.get('api/users/types');
  }

  updateUser(user_id: number, data: UserEditFormData): Promise<any> {
    return this.data_fetcher.post(`api/users/${user_id}/edit`, data);
  }

  createNewUser(data: UserRegistrationFormData ): Promise<any>{
    return this.data_fetcher.post('api/register', data);
  }

  getUserState() : Promise<any>{
    return this.data_fetcher.get('api/users/my-state');
  }
}
