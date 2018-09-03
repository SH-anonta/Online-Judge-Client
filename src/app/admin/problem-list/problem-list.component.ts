import { Component, OnInit } from '@angular/core';
import {ProblemListItem} from '../../global-services/repository-services/problem-repository-service';
import {DataFetcherService} from '../../global-services/data-fetcher.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problem_list: ProblemListItem[]= [];

  constructor(private data_fetcher: DataFetcherService) {

  }

  ngOnInit() {
    this.loadData()
  }

  loadData(){
    let promise = this.data_fetcher.get('api/problems/all');

    promise.then(x=>{
      console.log(x)
      this.problem_list= x;
    });
  }



}
