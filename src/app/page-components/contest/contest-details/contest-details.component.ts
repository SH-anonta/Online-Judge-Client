import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.css']
})
export class ContestDetailsComponent implements OnInit {
  show_contest_end_count_down: boolean= false;

  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();
  count_down_till: Date;


  constructor(public user_service: UserService,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              public contest_repository: ContestRepositoryService,
              private router: Router) {
    this.contest_id = this.route.snapshot.params['contest_id'];

    //set dummy time until real value is retrieved
    let dummy = new Date();
    dummy.setHours(24);
    this.count_down_till = dummy
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
      let contest_start_time = new Date(data.StartDate).getTime();
      let contest_end_time = new Date(data.EndDate).getTime();

      this.count_down_till= new Date(data.EndDate);

      this.show_contest_end_count_down = contest_start_time < Date.now()
                                        && contest_end_time > Date.now();
    });
  }

  countDownFinishEventHandler(){

  }

  onDeleteBtnClick(){
    let ans = confirm('Delete this contest?');

    if(ans){
      let promise = this.contest_repository.deleteContest(this.contest_id);

      promise.then(data =>{
        this.router.navigate(['/contest'])
      });
      promise.catch(x=>{
        alert('Failed to delete contest')
      })
    }
  }
}
