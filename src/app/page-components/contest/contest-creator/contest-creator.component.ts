import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-creator',
  templateUrl: './contest-creator.component.html',
  styleUrls: ['./contest-creator.component.css']
})
export class ContestCreatorComponent implements OnInit {
  contest_type: string= 'private'; // this is used to hide or show the password fields
  problem_list: string[]= [];
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onAddProblemClickHandler(event: any){
    this.problem_list.push("12");
    event.target.blur();
  }

  removeProblemClickHandler(){
    this.problem_list.pop();
  }

  createBtnClickHandler(form: NgForm) {
    this.router.navigate(['/contest/21']);
  }
}
