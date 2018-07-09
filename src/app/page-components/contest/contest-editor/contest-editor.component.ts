import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contest-editor',
  templateUrl: './contest-editor.component.html',
  styleUrls: ['./contest-editor.component.css']
})
export class ContestEditorComponent implements OnInit {
  contest_type= 'select';
  problem_list;

  constructor() { }

  ngOnInit() {
  }

  onAddProblemClickHandler(event: any){

  }

  cancelBtnClickHandler() {

  }
  saveBtnClickHandler(form: NgForm){

  }

  removeProblemClickHandler(){

  }
}
