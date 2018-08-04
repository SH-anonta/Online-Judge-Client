import { Component, OnInit } from '@angular/core';
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

  constructor(public user_service: UserService,
              public link_generator: LinkGeneratorService,
              public announcement_repository: AnnouncementRepositoryService) { }

  ngOnInit() {
    var promise = this.announcement_repository.getAnnouncements(1, 100);

    promise.then(data => {
      console.log(data);
      this.announcement_list= data;
    });
  }

}
