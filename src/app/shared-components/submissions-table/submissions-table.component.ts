//A table that shows submissions
// this is meant to be ued in user and contest components

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-submissions-table',
  templateUrl: './submissions-table.component.html',
  styleUrls: ['./submissions-table.component.css']
})
export class SubmissionsTableComponent implements OnInit {
  // a list of submissions that this component (table) will show
  @Input() submissions;   //todo add type Submission
  constructor() { }

  ngOnInit() {
  }

}
