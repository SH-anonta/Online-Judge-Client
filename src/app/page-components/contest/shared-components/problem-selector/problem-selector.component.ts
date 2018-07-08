import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-selector',
  templateUrl: './problem-selector.component.html',
  styleUrls: ['./problem-selector.component.css']
})
export class ProblemSelectorComponent implements OnInit {
  problem_list: string[]= [];

  constructor() { }

  ngOnInit() {

  }

  onAddProblemClick(item: string, event:any) {
    if(item.trim()){
      this.problem_list.push(item);
    }

    event.target.blur();
  }

  onRemoveProblemClick(idx: number) {
    this.problem_list.splice(idx, 1);
  }


}
