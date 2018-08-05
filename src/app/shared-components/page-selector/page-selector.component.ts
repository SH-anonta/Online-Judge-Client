import {AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.css']
})
export class PageSelectorComponent implements OnInit, DoCheck{
  private readonly INITIAL_PAGE: number = 1;

  @Input() total_items: number;
  @Input() items_per_page: number;
  @Input() current_page: number= this.INITIAL_PAGE;

  @Output() PageNavigationClick = new EventEmitter<number>();

  // dummy list for letting template iterate n number of times
  page_numbers: number[];

  constructor() {}

  ngOnInit() {

  }

  ngDoCheck(){

    // if(!this.total_items && !this.items_per_page){
    //   throw new Error("One or more input attributes missing");
    // }

    let n = Math.ceil(this.total_items/this.items_per_page);
    let list: number[]= [];

    for(let i= 1; i<=n; i++){
      list.push(i);
    }

    this.page_numbers = list;
  }

  onPageNumberClick(event: any, page_number: number) {
    this.PageNavigationClick.emit(page_number);
    event.target.blur();
  }

  onNextLinkClick(event: any){
    this.PageNavigationClick.emit(this.current_page+1);
  }

  onPreviousLinkClick(event: any){
    this.PageNavigationClick.emit(this.current_page-1);
  }
}
