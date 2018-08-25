//  count down to contest begin
// users get redirected here if they try to access contest problems before the contest begins

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-contest-count-down',
  templateUrl: './contest-count-down.component.html',
  styleUrls: ['./contest-count-down.component.css']
})
export class ContestCountDownComponent implements OnInit{
  show_count_down:boolean = false;

  contest_start_time: Date;
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();

  constructor(public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
              private router: Router) {

    this.contest_id = this.route.snapshot.params['contest_id'];

    // set contest time to 15s in the future
    let time = new Date();
    this.contest_start_time= new Date();
    this.contest_start_time.setSeconds(time.getSeconds()+10);
  }

  ngOnInit() {
    this.loadData();
  }


  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
      this.contest_start_time= new Date(data.StartDate);
      this.show_count_down= true;
    });
  }


  onCountDownComplete(){
    // this.router.navigate(this.link_generator.contestProblemList(this.contest_id));
  }

}
