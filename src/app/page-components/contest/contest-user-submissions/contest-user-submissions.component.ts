import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionListItem} from '../../../global-services/repository-services/submissions-repository.service';

@Component({
  selector: 'app-contest-user-submissions',
  templateUrl: './contest-user-submissions.component.html',
  styleUrls: ['./contest-user-submissions.component.css']
})
export class ContestUserSubmissionsComponent implements OnInit {
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();
  submission_list: SubmissionListItem[]= [];


  constructor(public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
              private router: Router) {

    this.contest_id = this.route.snapshot.params['contest_id'];
  }


  loadData(){
    let promise = this.contest_repository.getContestantSubmissions(this.contest_id, 1);

    promise.then((data: SubmissionListItem[])=>{
      console.log(data);
      this.submission_list = data;
    });
  }


  ngOnInit() {
    this.loadData();
  }

}
