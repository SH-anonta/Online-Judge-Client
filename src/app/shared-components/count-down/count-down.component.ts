import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Input() count_down_till: Date; // required attribute, throw exception if not provided
  @Output() count_down_complete_event: EventEmitter<void>= new EventEmitter<void>();
  interval_subscription;

  //string shown on the template
  time_left: string;

  constructor() { }

  ngOnInit() {
    if(!this.count_down_till){
      throw new Error('Attribute count_down_till is required');
    }


    //start count down,

    let observable = new IntervalObservable(1000);
    this.time_left = this.getRemainingTimeString(this.count_down_till);

    //set timer for updating the countdown every second, until reaching 0 seconds
    this.interval_subscription = observable.subscribe(()=>{

      if(this.count_down_till.getTime() <= Date.now()){
        // if count down ends, stop this timer
        this.interval_subscription.unsubscribe();

        // let the parent component know that the countdown has ended
        this.count_down_complete_event.emit();
        return;
      }

      // update the count down string displayed on the template
      this.time_left = this.getRemainingTimeString(this.count_down_till);

    });
  }

  ngOnDestroy(){
    this.interval_subscription.unsubscribe();
  }

  getRemainingTimeString(ta: Date): string{
    let diff = ta.getTime() - Date.now();

    let h= Math.floor(diff/(1000*60*60));
    diff = diff%(1000*60*60);
    let m= Math.floor(diff/(1000*60));
    diff = diff%(1000*60);
    let s= Math.floor(diff/1000);

    return h+":"+m+":"+s;
  }
}
