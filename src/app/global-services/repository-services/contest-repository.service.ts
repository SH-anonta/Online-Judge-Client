import {DataFetcherService} from '../data-fetcher.service';
import {Injectable} from '@angular/core';
import {UserService} from '../user.service';
import {ProblemDetailsData, ProblemListItem} from './problem-repository-service';

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

  Problems: ProblemListItem[];
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

export class UnFinishedContestListCollection {
  RunningContests: ContestListItemData[];
  UpcomingContests: ContestListItemData[];
}

export class ContestCollection {
  TotalCount: number;
  Collection: ContestListItemData[];
}

@Injectable()
export class ContestRepositoryService{

  constructor(private data_fetcher: DataFetcherService,
              private user_service: UserService){
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
    return this.data_fetcher.get(`api/contests/${contest_id}`);
  }

  registerForContest(contest_id: number){
    if(!this.user_service.userIsAuthenticated()){
      throw new Error('User must be logged in to register for contest');
    }

    return this.data_fetcher.post(`api/contests/${contest_id}/register`);
  }

  deleteContest(contest_id: number) {
    return this.data_fetcher.post(`api/contests/${contest_id}/delete`);
  }

  getUnfinishedContestsList() : Promise<UnFinishedContestListCollection>{
    return this.data_fetcher.get(`api/contests/unfinished-contests`);
  }

  getPastContestsList(start: number, limit: number): Promise<ContestCollection> {
    let params = {
      start : start,
      limit : limit,
    };
    return this.data_fetcher.get(`api/contests/past-contests`, params);
  }
}
