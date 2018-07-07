import { Component, OnInit } from '@angular/core';
import {UserService} from '../../global-services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user_service: UserService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.user_service.logout();
  }

}
