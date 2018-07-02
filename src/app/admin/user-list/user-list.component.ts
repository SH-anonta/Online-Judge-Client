import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from '../../global-models/user.model';
import {DataFetcherService} from '../../global-services/data-fetcher.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  user_list: User[]= [];
  constructor(private data_fetcher: DataFetcherService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // load the list of users
    const promise = this.data_fetcher.getAllUsersList();

    promise.then(users =>{
      this.user_list = users;
    });

    promise.catch((reason)=>{
      console.log('Failed to get user list: ', reason)
    });
  }
}
