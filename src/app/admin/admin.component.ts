import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from '../global-services/repository-services/user-repository.service';
import {LinkGeneratorService} from '../global-services/link-generator.service';
import {DataFetcherService} from '../global-services/data-fetcher.service';


@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }
}
