//A table that shows submissions
// this is meant to be ued in user and contest components

import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SubmissionListItem} from '../../global-services/repository-services/submissions-repository.service';
import {LinkGeneratorService} from '../../global-services/link-generator.service';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-submissions-table',
  templateUrl: './submissions-table.component.html',
  styleUrls: ['./submissions-table.component.css']
})
export class SubmissionsTableComponent implements OnInit, OnDestroy {
  @Input() reload_interval: number = 1;  // in seconds
  private readonly update_subscription: any;

  // a list of submissions that this component (table) will show
  @Input() submissions: SubmissionListItem[]= [];
  @Output() onStatusUpdateRequest: EventEmitter<void> = new EventEmitter<void>();

  constructor(public link_generator: LinkGeneratorService) {
    let observable= IntervalObservable.create(this.reload_interval*1000);

    this.update_subscription = observable.subscribe(x=>{
      this.onStatusUpdateRequest.emit();
    });
  }


  ngOnDestroy(){
    this.update_subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
