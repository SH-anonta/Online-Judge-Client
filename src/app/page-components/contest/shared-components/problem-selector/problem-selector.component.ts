import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LinkGeneratorService} from '../../../../global-services/link-generator.service';
import {
  ProblemDetailsData,
  ProblemRepositoryService
} from '../../../../global-services/repository-services/problem-repository-service';
import {ToastsManager} from 'ng6-toastr';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-problem-selector',
  templateUrl: './problem-selector.component.html',
  styleUrls: ['./problem-selector.component.css']
})
export class ProblemSelectorComponent implements OnInit {
  selected_row: number = 0;
  @Input() problem_list: ProblemDetailsData[]= [];

  constructor(public link_generator: LinkGeneratorService,
              public toast_man: ToastsManager,
              public problem_repository: ProblemRepositoryService) {
  }

  ngOnInit() {

  }

  onAddProblemClick(problem_id: string, event:any) {
    event.target.blur();
    let id = parseInt(problem_id);

    if(!id){
     this.toast_man.error('Invalid Problem ID');
      return;
    }

    if(this.problem_list.findIndex(x=> x.Id == id) != -1){
      this.toast_man.error('Problem already added');
      return;
    }

    let promise = this.problem_repository.getProblem(id);

    promise.then((data: ProblemDetailsData)=>{
      this.problem_list.push(data);
    });

    promise.catch((data: HttpErrorResponse)=>{
      this.toast_man.error('Problem not found');
    });
  }

  onRemoveProblemClick(event: any) {
    this.problem_list.splice(this.selected_row, 1);
    this.selected_row = 0;

    event.target.blur();
  }

  // when users click on a row to select it
  onProblemRowClick(row_number: number){
    this.selected_row = row_number;
  }

  onUpBtnClick(event: any){
    if(this.selected_row == 0){
      return;
    }

    // swap two rows
    let temp = this.problem_list[this.selected_row-1];
    this.problem_list[this.selected_row-1] = this.problem_list[this.selected_row];
    this.problem_list[this.selected_row] = temp;
    this.selected_row--;

    event.target.blur();
  }

  onDownBtnClick(event: any){
    if(this.selected_row == this.problem_list.length-1){
      return;
    }

    // swap two rows
    let temp = this.problem_list[this.selected_row+1];
    this.problem_list[this.selected_row+1] = this.problem_list[this.selected_row];
    this.problem_list[this.selected_row] = temp;
    this.selected_row++;

    event.target.blur();
  }

  // return all the id's of the problem
  getProblems(): number[]{
    return this.problem_list.map(x=>x.Id);
  }
}
