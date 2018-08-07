import { Component, OnInit } from '@angular/core';
import {UserService} from '../../global-services/user.service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public user_service: UserService,
              public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }

}
