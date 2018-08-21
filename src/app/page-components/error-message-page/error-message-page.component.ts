import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

// expects the error message to be in route snapshot data

@Component({
  selector: 'app-error-message-page',
  templateUrl: './error-message-page.component.html',
  styleUrls: ['./error-message-page.component.css']
})
export class ErrorMessagePageComponent implements OnInit {
  error_message:string;

  constructor(private router: Router, public route: ActivatedRoute) {

    this.error_message = this.route.snapshot.data['error_msg'];
  }

  ngOnInit() {
  }

}
