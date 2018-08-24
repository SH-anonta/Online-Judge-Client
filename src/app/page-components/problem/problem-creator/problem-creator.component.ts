import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-problem-creator',
  templateUrl: './problem-creator.component.html',
  styleUrls: ['./problem-creator.component.css']
})
export class ProblemCreatorComponent implements OnInit {
  private test_case_input_file: File= null;
  private test_case_output_file: File= null;
  error_messages: string[] = [];

  constructor(private router: Router,
              private link_generator: LinkGeneratorService,
              public toast_man: ToastsManager,
              private problem_repository: ProblemRepositoryService) { }

  ngOnInit() {
  }

  onCreateBtnClick(form: NgForm){
    let promise = this.problem_repository.createProblem(form.value,
                                            this.test_case_input_file,
                                            this.test_case_output_file);

    promise.then(data =>{
      this.toast_man.success('Problem successfully created');
      this.router.navigate(this.link_generator.problemList());
    });

    promise.catch((resp: HttpErrorResponse)=>{
      this.toast_man.error('Failed to create problem');
      this.error_messages = resp.error;
      scroll(0,0);
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
