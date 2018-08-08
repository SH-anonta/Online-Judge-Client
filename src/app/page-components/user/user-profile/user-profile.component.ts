import {Component, OnInit} from '@angular/core';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../global-services/user.service';
import {
  UserDetailsData,
  UserRepositoryService,
} from '../../../global-services/repository-services/user-repository.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.html']
})
export class UserProfileComponent implements OnInit{
  readonly user_id: number;
  user_data: UserDetailsData= new UserDetailsData();

  username: string;
  email: string;

  constructor(private router: Router,
              public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              public user_repository: UserRepositoryService) {
    this.user_id = this.route.snapshot.params['user_id'];
  }


  ngOnInit(){
    this.loadData();
  }



  loadData(){
    let promise = this.user_repository.getUserData(this.user_id);
    promise.then(data=>{
      this.user_data = data;
    });

    promise.catch((error: HttpErrorResponse)=>{
      if(error.status == 404){
        this.router.navigate(this.link_generator.error404());
      }

    });
  }
}
