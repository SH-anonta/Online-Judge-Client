import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {

  constructor(public user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteBtnClick() {
    let ans = confirm('Delete this problem?');

    if(ans){
      this.router.navigate(['/problem']);
    }
  }
}
