import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {AnnouncementRepositoryService} from '../../../global-services/repository-services/announcement-repository.service';
import {ProblemDetailsData, ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {
  problem_id: number;
  problem_data: ProblemDetailsData= new ProblemDetailsData();

  constructor(
    private router: Router,
    public user_service: UserService,
    public link_generator: LinkGeneratorService,
    public route: ActivatedRoute,
    public problem_repository: ProblemRepositoryService)
  {
    this.problem_id = this.route.snapshot.params['problem_id'];
  }

  ngOnInit() {
    this.loadData();
  }

  onDeleteBtnClick() {
    let ans = confirm('Delete this problem?');

    if(ans){
      this.router.navigate(['/problem']);
    }
  }

  loadData(){
    let promise = this.problem_repository.getProblem(this.problem_id);
    promise.then(data=>{
      this.problem_data = data;
    });

    promise.catch((error: HttpErrorResponse)=>{
      if(error.status == 404){
        this.router.navigate(this.link_generator.error404());
      }
    });
  }

}
