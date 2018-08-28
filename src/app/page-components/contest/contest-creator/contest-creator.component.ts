import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng6-toastr';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ContestCreationFormData, ContestRepositoryService} from '../../../global-services/repository-services/contest-repository.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contest-creator',
  templateUrl: './contest-creator.component.html',
  styleUrls: ['./contest-creator.component.css']
})
export class ContestCreatorComponent implements OnInit {
  error_messages: string[]= [];
  @ViewChild('ProblemSelector') problem_selector;

  constructor(private router: Router,
              private contest_repository: ContestRepositoryService,
              public link_generator: LinkGeneratorService,
              public toast_man: ToastsManager) { }

  ngOnInit() {

  }

  formSubmitHandler(form: NgForm) {
    // console.log(form);

    let form_data:ContestCreationFormData = <ContestCreationFormData> form.value;
    form_data.Problems = this.problem_selector.getProblems();

    let promise = this.contest_repository.createNewContest(form.value);
    promise.then( data =>{
      this.toast_man.success('Contest created successfully');
      this.router.navigate(this.link_generator.contestList());
    });

    promise.catch( (resp: HttpErrorResponse)=>{
      this.toast_man.error('Failed to create contest');
      this.error_messages = resp.error;
      scroll(0,0);
    });
  }

}
