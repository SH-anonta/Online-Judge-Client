import {Component, OnInit} from '@angular/core';
import {User} from './global-models/user.model';
import {UserService} from './global-services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public user_service: UserService){}

  ngOnInit(){
  }

  routerOutletActivateEventHandler(event: any) {
    //after changing route scroll to the top of page
    window.scroll(0,0);
  }
}
