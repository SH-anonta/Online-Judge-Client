import {Component, Input, OnInit} from '@angular/core';
import {ProblemListItem} from '../../global-services/repository-services/problem-repository-service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';

@Component({
  selector: 'app-problem-list-table',
  templateUrl: './problem-list-table.component.html',
  styleUrls: ['./problem-list-table.component.css']
})
export class ProblemListTableComponent implements OnInit {
  @Input() problem_list: ProblemListItem[]= [];
  @Input() show_accessibility_column: boolean = true;

  constructor(public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }

}
