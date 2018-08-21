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


export class ContestRankListItemData {
  UserId: number;
  UserName;
  SolveCount: number;
  Penalty: number;
  ProblemAcceptTimes: Date[]; // todo change type to TimeSpan or something similar
  ProblemRejectCounts: number[];
}

export class RankListCollection{
  ContestTitle: string;
  TotalCount: number;
  RankStartsFrom: number;
  Collection: ContestRankListItemData[];
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

  getContestRankList(contest_id: number, start: number, limit: number): Promise<RankListCollection>{
    let params = {
      start : start,
      limit : limit,
    };

    return this.data_fetcher.get(`api/contests/${contest_id}/rank`, params);
  }

  getContestDetails(contest_id: number) :Promise<ContestDetailsData>{
    return this.data_fetcher.get(`api/contests/${contest_id}`)
  }
}
