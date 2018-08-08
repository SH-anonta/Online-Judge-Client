import { Component, OnInit } from '@angular/core';
import {UserDetailsData, UserRepositoryService, UserTypeData} from '../../../global-services/repository-services/user-repository.service';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../../global-services/user.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-profile-editor',
  templateUrl: './user-profile-editor.component.html',
  styleUrls: ['./user-profile-editor.component.css']
})
export class UserProfileEditorComponent implements OnInit {
  readonly user_id: number;
  user_data: UserDetailsData= new UserDetailsData();
  user_types: UserTypeData[]= [];

  constructor(private router: Router,
              public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public route: ActivatedRoute,
              public user_repository: UserRepositoryService) {
    this.user_id = this.route.snapshot.params['user_id'];
    this.loadData();
    this.loadUserTypes();
  }

  ngOnInit() {
  }


  loadUserTypes(){
    let promise = this.user_repository.getUserTypes();
    promise.then(data=> {
      this.user_types= data;
    })
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

  onUpdateClick(form: NgForm){
    let promise = this.user_repository.updateUser(this.user_id, form.value);
    promise.then(x=>{
      this.router.navigate(this.link_generator.userDetails(this.user_id));
    });
  }

}
