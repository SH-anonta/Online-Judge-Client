

// this service fetches data from the server backend
export class DataFetcherService {

  constructor() {

  }

  getUserProfileData(id: string){
    return {
      username : 'Anonta',
      email : 'user@user.net',
    };
  }

}
