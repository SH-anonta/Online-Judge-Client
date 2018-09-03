import {Component, OnInit, ViewChild} from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnouncementRepositoryService} from '../../../global-services/repository-services/announcement-repository.service';
import {ProblemListItem, ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems_list: ProblemListItem[]= [];
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

    let promise = this.problem_repository.getProblemList(start, limit);
    promise.then(data=>{
      this.total_list_items = data.TotalCount;
      this.problems_list = data.Collection;
    });
  }

  onSearchClick(event: any) {
    event.target.blur();
  }

  onPageNavigationClick(page_number){
    this.loadData(page_number);
    this.current_page = page_number;
    scroll(0,0);
  }
}
