import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ProblemDetailsData, ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-problem-editor',
  templateUrl: './problem-editor.component.html',
  styleUrls: ['./problem-editor.component.css']
})
export class ProblemEditorComponent implements OnInit {
  problem_id: number;
  problem_data: ProblemDetailsData= new ProblemDetailsData();

  private test_case_input_file: File= null;
  private test_case_output_file: File= null;

  constructor(private router: Router,
              private link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              private problem_repository: ProblemRepositoryService) {
    this.problem_id = this.route.snapshot.params['problem_id'];
  }

  ngOnInit() {
    this.loadData();
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

  onUpdateBtnClick(form: NgForm){
    let promise = this.problem_repository.updateProblem(this.problem_id,
                                                        form.value,
                                                        this.test_case_input_file,
                                                        this.test_case_output_file);

    promise.then(data =>{
      this.router.navigate(this.link_generator.problemDetails(this.problem_id));
    });
  }

  // file input needs to be handled this way
  onTestCaseInputChange(file: FileList){
    this.test_case_input_file= file.item(0);
  }

  // file input needs to be handled this way
  onTestCaseOutputChange(file: FileList){
    this.test_case_output_file= file.item(0);
  }

}
