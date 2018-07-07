import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit {
  member_list: string[]= [];

  constructor() { }

  ngOnInit() {
  }

  onAddMemberClick(item: string) {
    if(item.trim()){
      this.member_list.push(item);
    }
  }

  onRemoveMemberClick(idx: number) {
    this.member_list.splice(idx, 1);
  }

}
