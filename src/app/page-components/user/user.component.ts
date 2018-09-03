import {Component} from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  // does not have a selector as this is a routing component
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.html']
})
export class UserComponent {
  readonly user_id: number;

  username: string;
  email: string;

  constructor(public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,){
    this.user_id = this.route.params['user_id'];
  }

}

