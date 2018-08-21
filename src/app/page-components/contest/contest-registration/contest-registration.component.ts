import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {UserService} from '../../../global-services/user.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

@Component({
  selector: 'app-contest-registration',
  templateUrl: './contest-registration.component.html',
  styleUrls: ['./contest-registration.component.css']
})
export class ContestRegistrationComponent implements OnInit {
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();

  constructor(public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
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
      console.log(data);
    });
  }

  onRegisterBtnClick() {
    // todo implement
    this.router.navigate(this.link_generator.contestStartCountDown(this.contest_id));
  }
}
