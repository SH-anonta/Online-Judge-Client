import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserRepositoryService} from '../../global-services/repository-services/user-repository.service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('reg_form') registration_form;

  constructor(private router: Router,
              public link_generator: LinkGeneratorService,
              private user_repository: UserRepositoryService) { }

  ngOnInit(){
  }

  onSubmitHandler(form: NgForm){
    let promise = this.user_repository.createNewUser(form.value);
    promise.then(x=>{
      this.router.navigate(this.link_generator.loginPage())
    });
  }
}
