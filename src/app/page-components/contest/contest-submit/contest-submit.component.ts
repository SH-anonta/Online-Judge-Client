import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-submit',
  templateUrl: './contest-submit.component.html',
  styleUrls: ['./contest-submit.component.css']
})
export class ContestSubmitComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  submitBtnClickHandler() {
    this.router.navigate(['/contest/3/user/3/submissions'])
  }
}
