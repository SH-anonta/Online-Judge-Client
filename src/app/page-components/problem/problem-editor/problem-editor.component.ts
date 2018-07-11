import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-problem-editor',
  templateUrl: './problem-editor.component.html',
  styleUrls: ['./problem-editor.component.css']
})
export class ProblemEditorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSaveBtnClick() {
    this.router.navigate(['/problem/12']);
  }
}
