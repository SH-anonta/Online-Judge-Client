import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ProblemRepositoryService} from '../../../global-services/repository-services/problem-repository-service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

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
              private problem_repository: ProblemRepositoryService) { }

  ngOnInit() {
  }

  onCreateBtnClick(form: NgForm){
    let promise = this.problem_repository.createProblem(form.value,
                                            this.test_case_input_file,
                                            this.test_case_output_file);

    promise.then(data =>{
      this.router.navigate(this.link_generator.problemList());
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
