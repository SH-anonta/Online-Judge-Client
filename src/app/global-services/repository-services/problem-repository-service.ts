import {Injectable} from '@angular/core';
import {DataFetcherService} from '../data-fetcher.service';
import {strictEqual} from 'assert';

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
  Id: number;
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

export class ProblemCreationForm{
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

  IsPublic: boolean;
  // TestCaseInput and TestCaseOutput are not included here as they are uploaded as files
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

  getUserProblemList(user_id: number, start: number, limit: number) {
    let params={
      start: start,
      limit: limit
    };

    return this.data_fetcher.get(`api/users/${user_id}/problems`, params);
  }

  createProblem(problem_data:ProblemCreationForm,
                input_file:File,
                output_file:File ): Promise<any>{

    // console.log(problem_data);
    let form = new FormData();

    //IMPORTANT: files must be inserted in order input_file then output_file
    form.append('InputTestCase', input_file, 'input_file');
    form.append('OutputTestCase', output_file, 'output_file');

    form.append('Title', problem_data.Title);
    form.append('Description', problem_data.Description);
    form.append('Constraints', problem_data.Constraints);
    form.append('InputSpecification', problem_data.InputSpecification);
    form.append('OutputSpecification', problem_data.OutputSpecification);
    form.append('SampleInput', problem_data.SampleInput);
    form.append('SampleOutput', problem_data.SampleOutput);
    form.append('Notes', problem_data.Notes);
    form.append('TimeLimit', problem_data.TimeLimit.toString());
    form.append('MemoryLimit', problem_data.MemoryLimit.toString());
    form.append('IsPublic', problem_data.IsPublic? 'True' : 'False');

    return this.data_fetcher.post('api/problems/create', form);
  }

  submitSolution(problem_id: number, submission: SubmissionFormData){
    return this.data_fetcher.post(`api/problems/${problem_id}/submit`, submission);
  }


  deleteProblem(problem_id: number) {
    return this.data_fetcher.post(`api/problems/${problem_id}/delete`);
  }


  updateProblem(problem_id,
                problem_data:ProblemCreationForm,
                input_file:File,
                output_file:File ): Promise<any>{
    // console.log(problem_data);
    let form = new FormData();

    // Files will be uploaded only if both are provided
    // thi is due to the fact that the server depends on the file order
    // to distinguish which files contain what
    if(input_file && output_file){
      //IMPORTANT: files must be inserted in order input_file then output_file
      form.append('InputTestCase', input_file, input_file.name);
      form.append('OutputTestCase', output_file, output_file.name);
    }


    form.append('Title', problem_data.Title);
    form.append('Description', problem_data.Description);
    form.append('Constraints', problem_data.Constraints);
    form.append('InputSpecification', problem_data.InputSpecification);
    form.append('OutputSpecification', problem_data.OutputSpecification);
    form.append('SampleInput', problem_data.SampleInput);
    form.append('SampleOutput', problem_data.SampleOutput);
    form.append('Notes', problem_data.Notes);
    form.append('TimeLimit', problem_data.TimeLimit.toString());
    form.append('MemoryLimit', problem_data.MemoryLimit.toString());
    form.append('IsPublic', problem_data.IsPublic? 'True' : 'False');

    return this.data_fetcher.post(`api/problems/${problem_id}/edit`, form);
  }
}
