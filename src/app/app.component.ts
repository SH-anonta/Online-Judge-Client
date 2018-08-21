import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {UserService} from './global-services/user.service';
import {DataFetcherService} from './global-services/data-fetcher.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(public user_service: UserService,
              private data_fetcher: DataFetcherService,
              public toast_man: ToastsManager,
              public view_container_ref: ViewContainerRef,
              private router: Router){

    // view container for toast notifications
    toast_man.setRootViewContainerRef(view_container_ref);
  }

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
