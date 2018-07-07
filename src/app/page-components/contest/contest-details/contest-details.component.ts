import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.css']
})
export class ContestDetailsComponent implements OnInit {

  constructor(public user_service: UserService) { }

  ngOnInit() {
  }

}
