import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-problem-creator',
  templateUrl: './problem-creator.component.html',
  styleUrls: ['./problem-creator.component.css']
})
export class ProblemCreatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateBtnClick() {
    this.router.navigate(['/problem/12']);
  }
}
