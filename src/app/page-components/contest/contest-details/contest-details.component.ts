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

  onDeleteBtnClick(){
    let ans = confirm('Delete this contest?');

    this.router.navigate(this.link_generator.errorMessagePage(), );

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
