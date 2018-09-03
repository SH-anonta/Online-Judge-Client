import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from '../../global-models/user.model';
import {DataFetcherService} from '../../global-services/data-fetcher.service';


class UserListItem {
  Id: number;
  UserName: string;
  UserType: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user_list: UserListItem[]= [];

  constructor(private data_fetcher: DataFetcherService) { }

  ngOnInit() {
    this.loadData();
  }


  loadData(){
    let promise = this.data_fetcher.get('api/users');

    promise.then(x=>{
      console.log(x);
      this.user_list = x;
    });
  }
}
