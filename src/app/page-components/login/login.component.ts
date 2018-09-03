import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


import {UserService} from '../../global-services/user.service';
import {User} from '../../global-models/user.model';
import { Router} from '@angular/router';
import {LinkGeneratorService} from '../../global-services/link-generator.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_error_msg: boolean = false;
  @ViewChild('Form') form_ref: ElementRef;
  @ViewChild('Form') form: NgForm;


  constructor(private userService: UserService,
              public link_generator: LinkGeneratorService,
              private router: Router) { }

  ngOnInit() {
    // this.form = this.form_ref.nativeElement;
    // console.log(this.form);
  }


  onFormSubmit(form: NgForm){
    let promise = this.userService.login(form.value.username, form.value.password);

    promise.then((user: User)=> {
      this.router.navigate(this.link_generator.homePage())
    });

    promise.catch((error: HttpErrorResponse)=> {
      this.show_error_msg= true;
    });
  }
}
