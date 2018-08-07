import { Component, OnInit } from '@angular/core';
import {
  ProblemDetailsData,
  ProblemListItem,
  ProblemRepositoryService
} from '../../../global-services/repository-services/problem-repository-service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-user-problems',
  templateUrl: './user-problems.component.html',
  styleUrls: ['./user-problems.component.css']
})
export class UserProblemsComponent implements OnInit {
  problem_list: ProblemListItem[]= [];

  readonly LIST_ITEMS_PER_PAGE: number = 10;
  total_list_items: number= 0;
  current_page:number = 1;

  constructor(private router: Router,
              public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              private problem_repository: ProblemRepositoryService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(page_number: number = 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    let limit = start+this.LIST_ITEMS_PER_PAGE-1;


    let promise = this.problem_repository.
                  getUserProblemList(this.user_service.user_id,start, limit);

    promise.then(data=>{
      this.total_list_items = data.TotalCount;
      this.problem_list = data.Collection;
    });


  }

  onPageNavigationClick(page_number){
    this.loadData(page_number);
    this.current_page = page_number;
    scroll(0,0);
  }
}
