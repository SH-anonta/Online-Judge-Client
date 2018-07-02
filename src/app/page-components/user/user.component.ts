import {Component} from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';
import {User} from '../../global-models/user.model';

@Component({
  // does not have a selector as this is a routing component
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.html']
})
export class UserComponent {

  username: string;
  email: string;

  constructor(private data_fetcher: DataFetcherService){

  }

}

