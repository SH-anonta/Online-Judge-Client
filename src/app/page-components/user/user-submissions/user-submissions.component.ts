import { Component, OnInit } from '@angular/core';
import {SubmissionListItem, SubmissionRepositoryService} from '../../../global-services/repository-services/submissions-repository.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';

@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})
export class UserSubmissionsComponent implements OnInit {
  submission_list: SubmissionListItem[]= [];
  readonly LIST_ITEMS_PER_PAGE: number = 10;
  total_list_items: number= 0;
  current_page:number = 1;
  user_id: number;

  constructor(private router: Router,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              private submission_repository: SubmissionRepositoryService)
  {
    this.user_id= this.route.snapshot.params['user_id'];

  }

  ngOnInit() {
    this.loadData();
  }

  loadData(page_number: number = 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    let limit = start+this.LIST_ITEMS_PER_PAGE-1;

    let promise = this.submission_repository.getUserSubmissions(this.user_id, start, limit);
    promise.then(data=>{
      this.total_list_items = data.TotalCount;
      this.submission_list = data.Collection;
    });
  }

  onNavigationPageClick(page_number: number) {
    this.loadData(page_number);
    this.current_page= page_number;
  }
}
