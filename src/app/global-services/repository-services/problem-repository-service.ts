import {Injectable} from '@angular/core';
import {DataFetcherService} from '../data-fetcher.service';

export class ProblemListData{
  TotalCount: number;
  Collection: ProblemListItem[];
}

export class SubmissionFormData{
  ProgrammingLanguageId: number;
  SourceCode: string;
}

export class ProblemListItem{
  Id: string;
  Title : string;
  IsPublic : boolean;
  Creator : string;
  CreatorId : number;
}

export class ProblemDetailsData {
  Id: string;
  Title : string;
  Description : string;
  Constraints : string;
  InputSpecification : string;
  OutputSpecification : string;
  SampleInput : string;
  SampleOutput : string;
  Notes : string;

  TimeLimit : number;
  MemoryLimit : number;

  IsPublic : boolean;

  Creator : string;
  CreatorId : number;

  CreateDate : Date;
}

export class ProgrammingLanguage {
  Id: number;
  Name: string;
}

@Injectable()
export class ProblemRepositoryService {

  constructor(private data_fetcher: DataFetcherService){

  }

  getProgrammingLanguages(): Promise<ProgrammingLanguage[]>{
    return this.data_fetcher.get('api/programming-languages');
  }

  getProblemList(start, limit): Promise<ProblemListData>{
    return this.data_fetcher.get('api/problems', {
      start: start,
      limit: limit,
    });
  }

  getProblem(problem_id: number){
    return this.data_fetcher.get(`api/problems/${problem_id}`);
  }

  submitSolution(problem_id: number, submission: SubmissionFormData){
    return this.data_fetcher.post(`api/problems/${problem_id}/submit`, submission);
  }
}
