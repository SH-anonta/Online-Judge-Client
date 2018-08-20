import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {AnnouncementRepositoryService} from '../../../global-services/repository-services/announcement-repository.service';
import {UserService} from '../../../global-services/user.service';
import {ContestRankListItemData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './contest-rank-list.component.html',
  styleUrls: ['./contest-rank-list.component.css']
})
export class ContestRankListComponent implements OnInit {
  readonly LIST_ITEMS_PER_PAGE: number = 10;
  total_list_items: number;
  current_page: number= 1;
  problem_list= [];

  contest_id: number;
  contest_title: string;
  rank_list: ContestRankListItemData[] = [];
  rank_starts_from: number= 1;

  constructor(private router: Router,
              public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              public contest_repository: ContestRepositoryService) {

    this.contest_id = this.route.snapshot.params['contest_id'];
  }

  ngOnInit() {
    this.loadData(1);
  }

  loadData(page_number: number = 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    let limit = start+this.LIST_ITEMS_PER_PAGE-1;

    let promise = this.contest_repository.getContestRankList(this.contest_id, start,limit);

    promise.then(data => {
      this.total_list_items =data.TotalCount;
      this.rank_list= data.Collection;
      this.rank_starts_from = data.RankStartsFrom;

      this.contest_title = data.ContestTitle;
      this.problem_list = data.Collection[0].ProblemRejectCounts;
      console.log(data);
    });
  }

  onPageNavigationClick(page_number: number){
    this.current_page= page_number;
    this.loadData(page_number);
  }
}
