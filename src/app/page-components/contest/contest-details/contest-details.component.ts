import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.css']
})
export class ContestDetailsComponent implements OnInit {

  constructor(public user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteBtnClick(){
    let ans = confirm('Delete this contest?');

    if(ans){
      this.router.navigate(['/contest'])
    }
  }
}
