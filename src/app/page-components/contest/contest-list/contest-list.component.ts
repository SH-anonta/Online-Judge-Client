import { Component, OnInit } from '@angular/core';
import {LingGeneratorService} from '../../../global-services/ling-generator.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  constructor(public link_generator: LingGeneratorService) { }

  ngOnInit() {
  }

}
