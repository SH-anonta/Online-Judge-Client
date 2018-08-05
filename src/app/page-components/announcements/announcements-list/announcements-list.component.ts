import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {
  AnnouncementListItem,
  AnnouncementRepositoryService
} from '../../../global-services/repository-services/announcement-repository.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css']
})
export class AnnouncementsListComponent implements OnInit {
  announcement_list: AnnouncementListItem[];
  readonly LIST_ITEMS_PER_PAGE: number = 10;
  total_list_items: number;
  @ViewChild('PageSelector') page_selector;

  constructor(public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public announcement_repository: AnnouncementRepositoryService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(page_number: number = 1){
    let start = (page_number-1)*this.LIST_ITEMS_PER_PAGE+1;
    // start = start == 0 ? 1 : start;

    let limit = start+this.LIST_ITEMS_PER_PAGE-1;

    console.log(start, limit);
    let promise = this.announcement_repository.getAnnouncements(start, limit);

    promise.then(data => {
      console.log(data);

      this.page_selector.total_items =data.TotalCount;
      this.announcement_list= data.Collection;
    });
  }

  onPageNavigationClick(page_number: number){
    this.page_selector.current_page= page_number;
    scroll(0,0);
    this.loadData(page_number);
  }
}
