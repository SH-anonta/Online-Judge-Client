import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-editor',
  templateUrl: './contest-editor.component.html',
  styleUrls: ['./contest-editor.component.css']
})
export class ContestEditorComponent implements OnInit {
  contest_type= 'select';
  problem_list;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddProblemClickHandler(event: any){
    this.problem_list.push("12");
    event.target.blur();
  }

  cancelBtnClickHandler() {
    this.navigateToContestDetailsPage()
  }

  saveBtnClickHandler(form: NgForm){
    this.navigateToContestDetailsPage()
  }

  navigateToContestDetailsPage(){
    this.router.navigate(['/contest/21']);
  }
  removeProblemClickHandler(){

  }
}
