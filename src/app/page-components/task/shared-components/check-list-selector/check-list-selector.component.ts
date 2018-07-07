import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list-selector',
  templateUrl: './check-list-selector.component.html',
  styleUrls: ['./check-list-selector.component.css']
})
export class CheckListSelectorComponent implements OnInit {
  check_list: string[]= [];

  constructor() { }

  ngOnInit() {
  }

  onAddCheckItemClick(item: string) {
    if(item.trim()){
      this.check_list.push(item);
    }
  }

  onRemoveCheckListItemClick(idx: number) {
    this.check_list.splice(idx, 1);
    // this.member_list.pop();
  }

}
