import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contest-registration',
  templateUrl: './contest-registration.component.html',
  styleUrls: ['./contest-registration.component.css']
})
export class ContestRegistrationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onRegisterBtnClick() {
    this.router.navigate(['..'], { relativeTo: this.route});
  }
}
