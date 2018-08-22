import { Component, OnInit } from '@angular/core';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

@Component({
  selector: 'app-contest-problem-list',
  templateUrl: './contest-problem-list.component.html',
  styleUrls: ['./contest-problem-list.component.css']
})
export class ContestProblemListComponent implements OnInit {
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();


  constructor(public contest_repository: ContestRepositoryService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              private router: Router) {
    this.contest_id = this.route.snapshot.params['contest_id'];
  }


  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
    });
  }


}
