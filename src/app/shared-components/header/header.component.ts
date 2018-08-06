import { Component, OnInit } from '@angular/core';
import {UserService} from '../../global-services/user.service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user_service: UserService,
              public link_generator: LinkGeneratorService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.user_service.logout();
  }

}
