import {Component} from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.html']
})
export class UserComponent {

  username: string;
  email: string;

  constructor(private data_fetcher: DataFetcherService){

  }


}
