import {Component, OnInit} from '@angular/core';
import {UserService} from './global-services/user.service';
import {DataFetcherService} from './global-services/data-fetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public user_service: UserService, private data_fetcher: DataFetcherService){}

  ngOnInit(){
    // todo remove before production
    // this.experimentalStuff();
  }

  routerOutletActivateEventHandler(event: any) {
    //after changing route scroll to the top of page
    window.scroll(0,0);
  }


  experimentalStuff(){
    let promise = this.data_fetcher.getAnnouncementList();
    promise.then(data =>{
      console.log(data);
    })
  }
}
