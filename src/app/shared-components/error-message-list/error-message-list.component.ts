import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-message-list',
  templateUrl: './error-message-list.component.html',
  styleUrls: ['./error-message-list.component.css']
})
export class ErrorMessageListComponent implements OnInit {
  @Input() error_messages= [];

  constructor() {
  }

  ngOnInit() {}

}
