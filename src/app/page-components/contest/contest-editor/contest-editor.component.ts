import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {
  ContestCreationFormData,
  ContestDetailsData,
  ContestRepositoryService
} from '../../../global-services/repository-services/contest-repository.service';
import {ToastsManager} from 'ng6-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {ProblemListItem} from '../../../global-services/repository-services/problem-repository-service';

@Component({
  selector: 'app-contest-editor',
  templateUrl: './contest-editor.component.html',
  styleUrls: ['./contest-editor.component.css']
})
export class ContestEditorComponent implements OnInit {
  contest_id: number;
  contest_data: ContestDetailsData = new ContestDetailsData();
  problem_list: ProblemListItem[] = [];

  error_messages: string[]= [];
  @ViewChild('ProblemSelector') problem_selector;

  constructor(private router: Router,
              private contest_repository: ContestRepositoryService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              public toast_man: ToastsManager) {
    this.contest_id = this.route.snapshot.params['contest_id'];
  }

  loadData(){
    let promise = this.contest_repository.getContestDetails(this.contest_id);

    promise.then(data => {
      this.contest_data = data;
      this.problem_list = data.Problems
      console.log(data.Problems);
    });
  }

  ngOnInit() {
    this.loadData();
  }

  formSubmitHandler(form: NgForm){
    let form_data:ContestCreationFormData = <ContestCreationFormData> form.value;
    form_data.Problems = this.problem_selector.getProblems();
    console.log(form_data.Problems);

    let promise = this.contest_repository.updateContest(this.contest_id, form.value);

    promise.then( data =>{
      this.toast_man.success('Contest updated successfully');
      this.router.navigate(this.link_generator.contestLink(this.contest_id));
    });

    promise.catch( (resp: HttpErrorResponse)=>{
      this.toast_man.error('Failed to update contest');
      this.error_messages = resp.error;
      scroll(0,0);
    });
  }

}
