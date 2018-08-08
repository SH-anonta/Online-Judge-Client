import {DataFetcherService} from '../data-fetcher.service';
import {Injectable} from '@angular/core';

export class ContestCreationFormData {
  Id: number;
  Title: string;
  Description: string;

  Creator: string;
  CreatorId: number;

  // expected to be utc time
  StartDate: Date;
  EndDate: Date;

  Password: string;
  ConfirmPassword: string;

  Problems: number[];
}


export class ContestDetailsData {
  Id: number;
  Title: string;
  Description: string;

  Creator: string;
  CreatorId: number;

  // expected to be utc time
  StartDate: Date;
  EndDate: Date;

  Problems: number[];
}

export class ContestListItemData {
  Id: number;
  Title: string;

  Creator: string;
  CreatorId: number;

  // expected to be utc time
  StartDate: Date;
  EndDate: Date;
}

@Injectable()
export class ContestRepositoryService{

  constructor(private data_fetcher: DataFetcherService){
  }

  createNewContest(data: ContestCreationFormData){
    // todo implement
  }

  getRunningAndUpComingContests(): Promise<ContestListItemData[]>{
    return this.data_fetcher.get('api/contests/');
  }

  getPastContests(): Promise<ContestListItemData[]>{
    return this.data_fetcher.get('api/past-contests/');
  }

}
