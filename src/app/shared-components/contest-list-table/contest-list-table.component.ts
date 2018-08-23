import {Component, Input, OnInit} from '@angular/core';
import {LinkGeneratorService} from '../../global-services/link-generator.service';
import {ContestListItemData} from '../../global-services/repository-services/contest-repository.service';

@Component({
  selector: 'app-contest-list-table',
  templateUrl: './contest-list-table.component.html',
  styleUrls: ['./contest-list-table.component.css']
})
export class ContestListTableComponent implements OnInit {
  @Input() contest_list: ContestListItemData[];
  @Input() show_registration_button: boolean;

  constructor(public link_generator: LinkGeneratorService,) { }

  ngOnInit() {
  }

}
