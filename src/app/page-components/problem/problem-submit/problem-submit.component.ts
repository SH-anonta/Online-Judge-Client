import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-problem-submit',
  templateUrl: './problem-submit.component.html',
  styleUrls: ['./problem-submit.component.css']
})
export class ProblemSubmitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitBtnClickHandler(){
    this.router.navigate(['/user/21/submissions']);
  }

}
