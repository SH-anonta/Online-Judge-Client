import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css']
})
export class AnnouncementsListComponent implements OnInit {

  constructor(public user_service: UserService) { }

  ngOnInit() {
  }

}
