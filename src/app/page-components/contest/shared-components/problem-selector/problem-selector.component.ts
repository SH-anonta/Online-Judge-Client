import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../../../global-services/link-generator.service';
import {ProblemRepositoryService} from '../../../../global-services/repository-services/problem-repository-service';
import {setUpLocationSync} from '@angular/router/upgrade';

@Component({
  selector: 'app-problem-selector',
  templateUrl: './problem-selector.component.html',
  styleUrls: ['./problem-selector.component.css']
})
export class ProblemSelectorComponent implements OnInit {
  selected_row: number = 0;
  problem_list: string[]= [];

  constructor(public link_generator: LinkGeneratorService,
              public problem_repository: ProblemRepositoryService) {
    this.problem_list.push('Item 1');
    this.problem_list.push('Item 2');
    this.problem_list.push('Item 3');
    this.problem_list.push('Item 4');
  }

  ngOnInit() {

  }

  onAddProblemClick(item: string, event:any) {
    if(item.trim()){
      this.problem_list.push(item);
    }

    event.target.blur();
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
}
