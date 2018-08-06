import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {
  ProblemDetailsData,
  ProblemRepositoryService,
  ProgrammingLanguage
} from '../../../global-services/repository-services/problem-repository-service';
import {HttpErrorResponse} from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-problem-submit',
  templateUrl: './problem-submit.component.html',
  styleUrls: ['./problem-submit.component.css']
})
export class ProblemSubmitComponent implements OnInit {
  problem_id: number;
  problem_data: ProblemDetailsData= new ProblemDetailsData();
  programming_languages: ProgrammingLanguage[]= [];

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
    this.loadProgrammingLanguages();
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

  loadProgrammingLanguages(){
    let promise = this.problem_repository.getProgrammingLanguages();
    promise.then((data:ProgrammingLanguage[])=>{
      this.programming_languages = data;
    });
  }

  submitBtnClickHandler(form: NgForm){
    let promise = this.problem_repository.submitSolution(this.problem_id,form.value);
    promise.then(x=>{
      // todo replace with user's real id
      this.router.navigate(this.link_generator.userSubmissions(1));
    });

  }

}
