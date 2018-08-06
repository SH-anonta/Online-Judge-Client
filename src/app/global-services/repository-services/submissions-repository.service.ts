import {Injectable} from '@angular/core';
import {DataFetcherService} from '../data-fetcher.service';

export class SubmissionListCollection{
  TotalCount: number;
  Collection: SubmissionListItem[];
}

export class SubmissionListItem{
  Id: number;
  ProblemTitle: string;
  ProblemId: number;
  Status: string;
  UserName: string;
  UserId: number;
  SubmissionDate: Date;
  RunningTime: number;
  PeakMemmoryUsage: number;
}

export class SubmissionDetailsData{
  Id: number;
  ProblemTitle: string;
  ProblemId: number;
  Status: string;
  UserName: string;
  UserId: number;
  SourceCode: string;
  StandardErrorStream: string;
  SubmissionDate: Date;
  RunningTime: number;
  PeakMemmoryUsage: number;
}


@Injectable()
export class SubmissionRepositoryService {


  constructor(private data_fetcher: DataFetcherService){

  }

  getUserSubmissions(user_id:number, start, limit): Promise<SubmissionListCollection>{
    let params = {
      start: start,
      limit: limit
    };

    return this.data_fetcher.get(`api/users/${user_id}/submissions`, params);
  }
}
