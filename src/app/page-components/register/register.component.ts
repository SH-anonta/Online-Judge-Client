import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form_error_list: string[]= [];
  @ViewChild('reg_form') registration_form;

  constructor(private router: Router) { }

  ngOnInit(){
  }


  onSubmitHandler(form: NgForm){
    //reset errors
    this.form_error_list= [];

    let promise = this.validateFormData(form);

    promise.then((errors: string[])=>{

      // all form validations are
      if(form.valid && errors.length == 0){
        this.router.navigate(['/login']);
      }
      else{
        this.form_error_list = errors;
      }
    });
  }

  validateFormData(form: NgForm): Promise<string[]>{
    return new Promise<string[]>((resolve, reject) =>{
      let errors:string[] = [];
      let values = form.value;

      // todo add more validations
      if(values.username.length < 4){
        errors.push('User name must be at lest 4 characters long')
      }
      if(values.password.length < 8){
        errors.push('Password must be at lest 8 characters long')
      }
      if(values.password != values.confirm_password){
        errors.push('Passwords do not match')
      }

      resolve(errors);
    });
  }

  // show the list of errors after form is submitted)
  shouldShowErrorMessages(): boolean{
    return this.form_error_list.length != 0 && this.registration_form.submitted;
  }
}
