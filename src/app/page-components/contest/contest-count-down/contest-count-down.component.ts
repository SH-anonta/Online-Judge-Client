//  count down to contest begin
// users get redirected here if they try to access contest problems before the contest begins

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observer} from 'rxjs/Observer';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {fiLocale} from 'ngx-bootstrap';
import {stringDistance} from 'codelyzer/util/utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-count-down',
  templateUrl: './contest-count-down.component.html',
  styleUrls: ['./contest-count-down.component.css']
})
export class ContestCountDownComponent implements OnInit, AfterViewInit{
  @ViewChild('count_down_time') count_down;
  contest_start_time: Date= new Date();
  time_left;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //start count down,
    let time = new Date();
    //todo move this logic into a reusable shared component
    let observable = new IntervalObservable(1000);
    this.contest_start_time.setSeconds(time.getSeconds()+15);

    this.time_left = this.getRemainingTimeString(this.contest_start_time);

    let subscription= observable.subscribe(()=>{

      if(this.contest_start_time <= new Date()){
        // if count down ends
        this.router.navigate(['/contest/12/problems']);
        subscription.unsubscribe();
      }

      this.time_left = this.getRemainingTimeString(this.contest_start_time);

    });


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
