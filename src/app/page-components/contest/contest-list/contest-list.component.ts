import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';
import {
  ContestListItemData,
  ContestRepositoryService,
  UnFinishedContestListCollection
} from '../../../global-services/repository-services/contest-repository.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {
  running_contests: ContestListItemData[] = [];
  upcoming_contests: ContestListItemData[] = [];

  past_contests: ContestListItemData[] = [];


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
}
