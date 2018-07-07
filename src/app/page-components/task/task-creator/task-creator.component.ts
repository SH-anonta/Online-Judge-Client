import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {
  constructor(private router: Router) { }

  @ViewChild('checklist_elector') checklist_selector;

  ngOnInit() {
  }

  onCreateClick() {
    this.router.navigate(['/projects/12/tasks/1']);
  }
}
