import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  constructor(public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }

}
