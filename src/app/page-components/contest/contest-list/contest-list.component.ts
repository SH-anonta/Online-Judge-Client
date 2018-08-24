import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';
import {
  ContestCollection,
  ContestListItemData,
  ContestRepositoryService,
  UnFinishedContestListCollection
} from '../../../global-services/repository-services/contest-repository.service';
import {ProblemListItem} from '../../../global-services/repository-services/problem-repository-service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {
  running_contests: ContestListItemData[] = [];
  upcoming_contests: ContestListItemData[] = [];

  show_past_contests: boolean = false;
  past_contests: ContestListItemData[] = [];

  // properties for controlling pagination
  readonly LIST_ITEMS_PER_PAGE: number = 10;
  total_list_items: number= 0;
  current_page:number = 1;


  constructor(public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
              public user_service: UserService) {

  }

  ngOnInit() {
    this.loadUnfinishedContests();
  }

  loadUnfinishedContests(){
    let promise = this.contest_repository.getUnfinishedContestsList();

    promise.then((data: UnFinishedContestListCollection) => {
      this.running_contests = data.RunningContests;
      this.upcoming_contests = data.UpcomingContests;
      console.log(data);
    });
  }

  loadPastContests(page_number: number= 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    let limit = start+this.LIST_ITEMS_PER_PAGE-1;

    let promise = this.contest_repository.getPastContestsList(start, limit);

    promise.then((data: ContestCollection) => {
      this.past_contests = data.Collection;
      this.total_list_items = data.TotalCount;
      // console.log(data);
    });
  }

  onPageNavigationClick(page_number){
    this.loadPastContests();
    this.current_page = page_number;
    scroll(0,0);
  }

  // event handlers


  onShowPastContestClick() {
    this.show_past_contests= true;
    this.loadPastContests();
  }
}

