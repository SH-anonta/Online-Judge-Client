import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  ContestDetailsData,
  ContestRepositoryService,
  ContestSubmissionsCollection
} from '../../../global-services/repository-services/contest-repository.service';
import {UserService} from '../../../global-services/user.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {SubmissionListItem} from '../../../global-services/repository-services/submissions-repository.service';

@Component({
  selector: 'app-contest-all-submissions',
  templateUrl: './contest-all-submissions.component.html',
  styleUrls: ['./contest-all-submissions.component.css']
})
export class ContestAllSubmissionsComponent implements OnInit {
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();
  submission_list: SubmissionListItem[]= [];

  readonly LIST_ITEMS_PER_PAGE: number = 50;
  total_list_items: number= 0;
  current_page:number = 1;

  constructor(public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
              private router: Router) {

    this.contest_id = this.route.snapshot.params['contest_id'];
  }

  ngOnInit() {
    this.loadData();
    this.loadSubmissions()
  }

  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
    });

  }

  loadSubmissions(page_number: number= 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    let limit = start+this.LIST_ITEMS_PER_PAGE-1;

    let submission_promise = this.contest_repository.getContestSubmissions(this.contest_id, start, limit);

    submission_promise.then((data: ContestSubmissionsCollection )=>{
      this.submission_list = data.Collection;
      this.total_list_items = data.TotalCount;
    });
  }

  onPageNavigationClick(page_number){
    this.loadSubmissions(page_number);
    this.current_page = page_number;
    scroll(0,0);
  }


}
