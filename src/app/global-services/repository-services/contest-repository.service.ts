import {DataFetcherService} from '../data-fetcher.service';
import {Injectable} from '@angular/core';
import {UserService} from '../user.service';
import {ProblemDetailsData, ProblemListItem, SubmissionFormData} from './problem-repository-service';
import {SubmissionListItem} from './submissions-repository.service';
import construct = Reflect.construct;

export class ContestCreationFormData {
  Title: string;
  Description: string;

  IsPublic: boolean;

  // expected to be utc time
  StartDate: string;
  EndDate: string;

  Password: string;
  ConfirmPassword: string;

  // array of problem Id s
  Problems: number[];
}

export class ContestDetailsData {
  Id: number;
  Title: string;
  Description: string;
  IsPublic: boolean;

  Creator: string;
  CreatorId: number;

  // expected to be utc time
  StartDate: Date;
  EndDate: Date;

  Problems: ProblemListItem[];


  constructor(){
    this.Problems= []
  }
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

export class ContestSubmissionsCollection {
  TotalCount: number;
  Collection: SubmissionListItem[];
}

export class ContestRegistrationFormData{
  Password: string;
}

@Injectable()
export class ContestRepositoryService{

  constructor(private data_fetcher: DataFetcherService,
              private user_service: UserService){
  }

  createNewContest(data: ContestCreationFormData): Promise<any>{
    return this.data_fetcher.post('api/contests/create', data);
  }

  updateContest(contest_id: number, data: ContestCreationFormData) : Promise<any>{
    return this.data_fetcher.post(`api/contests/${contest_id}/edit`, data);
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

  registerForContest(contest_id: number, data: ContestRegistrationFormData): Promise<any>{
    if(!this.user_service.userIsAuthenticated()){
      throw new Error('User must be logged in to register for contest');
    }

    return this.data_fetcher.post(`api/contests/${contest_id}/register`, data);
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

  getContestProblem(contest_id: number, problem_id: number): Promise<ProblemDetailsData> {
    return this.data_fetcher.get(`api/contests/${contest_id}/problems/${problem_id}`)
  }

  getContestSubmissions(contest_id: number, start: number, limit: number) {
    let params = {
      start : start,
      limit : limit,
    };
    return this.data_fetcher.get(`api/contests/${contest_id}/submissions/`, params);
  }

  submitSolution(contest_id: number, problem_order: number, data: SubmissionFormData) {
    return this.data_fetcher.post(`api/contests/${contest_id}/problems/${problem_order}/submit`, data);
  }
}
