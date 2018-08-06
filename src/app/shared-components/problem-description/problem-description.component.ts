import {Component, Input, OnInit} from '@angular/core';
import {ProblemDetailsData} from '../../global-services/repository-services/problem-repository-service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {
  @Input() problem_data: ProblemDetailsData;

  constructor() { }

  ngOnInit() {
  }

}
