import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {

  constructor(public user_service: UserService) { }

  ngOnInit() {
  }

}
