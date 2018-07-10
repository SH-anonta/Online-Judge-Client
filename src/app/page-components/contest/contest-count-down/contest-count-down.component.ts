//  count down to contest begin
// users get redirected here if they try to access contest problems before the contest begins

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-count-down',
  templateUrl: './contest-count-down.component.html',
  styleUrls: ['./contest-count-down.component.css']
})
export class ContestCountDownComponent implements OnInit{
  contest_start_time: Date;

  constructor(private router: Router) {
    // set contest time to 15s in the future
    let time = new Date();
    this.contest_start_time= new Date();
    this.contest_start_time.setSeconds(time.getSeconds()+10);
  }

  ngOnInit() {
  }

  onCountDownComplete(){
    this.router.navigate(['/contest/12/problems']);
  }

}
