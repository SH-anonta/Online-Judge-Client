import { Component, OnInit } from '@angular/core';
import {LinkGeneratorService} from '../../global-services/link-generator.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }

}
