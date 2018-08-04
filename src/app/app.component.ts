import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from './global-services/user.service';
import {DataFetcherService} from './global-services/data-fetcher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(public user_service: UserService,
              private data_fetcher: DataFetcherService,
              private router: Router){}

  ngOnInit(){}

  ngAfterViewInit(){
    // todo remove before production navigation only set for development
    // this.router.navigate(['/devs-only']);
  }

  routerOutletActivateEventHandler(event: any) {
    //after changing route scroll to the top of page
    window.scroll(0,0);
  }



}
