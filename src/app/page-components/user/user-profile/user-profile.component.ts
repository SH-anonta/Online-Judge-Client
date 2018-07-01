import {Component} from '@angular/core';
import {DataFetcherService} from '../../../global-services/data-fetcher.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.html']
})
export class UserProfileComponent {

  username: string;
  email: string;

  constructor(private data_fetcher: DataFetcherService){

  }


}
