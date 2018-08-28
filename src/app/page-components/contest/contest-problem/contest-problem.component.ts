import { Component, OnInit } from '@angular/core';
import {ProblemDetailsData, ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';
import {ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-contest-problem',
  templateUrl: './contest-problem.component.html',
  styleUrls: ['./contest-problem.component.css']
})
export class ContestProblemComponent implements OnInit {
  problem_id: number;   // this is the problem order in the not the actual
  contest_id: number;

  problem_data: ProblemDetailsData= new ProblemDetailsData();

  constructor(private router: Router,
              public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              private toast_man: ToastsManager,
              public contest_repository: ContestRepositoryService) {
    this.contest_id = this.route.snapshot.params['contest_id'];
    this.problem_id = this.route.snapshot.params['problem_id'];
  }

  loadData(){
    let promise = this.contest_repository.getContestProblem(this.contest_id, this.problem_id);

    promise.then((data:ProblemDetailsData )=>{
      this.problem_data = data;
      // console.log(data);
    });

    promise.catch(x =>{
      this.toast_man.error('Failed to load problem');
    });


  }

  ngOnInit() {
    this.loadData();
  }

}
