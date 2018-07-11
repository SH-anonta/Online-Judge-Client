import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-announcements-details',
  templateUrl: './announcements-details.component.html',
  styleUrls: ['./announcements-details.component.css']
})
export class AnnouncementsDetailsComponent implements OnInit {

  constructor(public user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteBtnClick(){
    let ans = confirm('Delete this announcement?');

    if(ans){
      this.router.navigate(['/announcements'])
    }
  }

}
