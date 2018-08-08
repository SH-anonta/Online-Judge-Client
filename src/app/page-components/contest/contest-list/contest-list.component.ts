import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {UserService} from '../../../global-services/user.service';
import {ContestListItemData} from '../../../global-services/repository-services/contest-repository.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {
  contests: ContestListItemData[] = [];

  constructor(public link_generator: LinkGeneratorService,
              public user_service: UserService) {

  }

  ngOnInit() {

  }

}
