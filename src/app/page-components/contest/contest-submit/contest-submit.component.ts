import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  ProblemDetailsData,
  ProblemRepositoryService,
  ProgrammingLanguage
} from '../../../global-services/repository-services/problem-repository-service';
import {UserService} from '../../../global-services/user.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ContestDetailsData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {NgForm} from '@angular/forms';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-contest-submit',
  templateUrl: './contest-submit.component.html',
  styleUrls: ['./contest-submit.component.css']
})
export class ContestSubmitComponent implements OnInit {
  problem_order: number;
  problem_data: ProblemDetailsData= new ProblemDetailsData();

  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();

  DEFAULT_PROGRAMMING_LANGUAGE_ID: number = 1;
  programming_languages: ProgrammingLanguage[]= [];

  constructor(private router: Router,
              public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              private toast_man: ToastsManager,
              private problem_repository: ProblemRepositoryService,
              public contest_repository: ContestRepositoryService) {
    this.contest_id = this.route.snapshot.params['contest_id'];
    this.problem_order = this.route.snapshot.params['problem_id'];
  }

  ngOnInit() {
    this.loadProgrammingLanguages();
    this.loadData();
  }

  loadProgrammingLanguages(){
    let promise = this.problem_repository.getProgrammingLanguages();
    promise.then((data:ProgrammingLanguage[])=>{
      this.programming_languages = data;
    });
  }

  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
    });

    let problem_promise = this.contest_repository.getContestProblem(this.contest_id, this.problem_order);
    problem_promise.then(data => {
      this.problem_data = data;
    });
  }


  submitBtnClickHandler(form: NgForm) {
    let promise = this.contest_repository.submitSolution(this.contest_id, this.problem_order, form.value);

    promise.then(x=>{
      this.toast_man.success('Submitted successfully');
      this.router.navigate(this.link_generator.contestContestantSubmissions(this.contest_id, 1));
    });

    promise.catch(x =>{
      this.toast_man.error('Failed to submit solution');
    });


  }
}
