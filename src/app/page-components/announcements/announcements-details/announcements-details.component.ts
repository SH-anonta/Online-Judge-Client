import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../global-services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {
  AnnouncementData,
  AnnouncementRepositoryService
} from '../../../global-services/repository-services/announcement-repository.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-announcements-details',
  templateUrl: './announcements-details.component.html',
  styleUrls: ['./announcements-details.component.css']
})
export class AnnouncementsDetailsComponent implements OnInit {
  // initialized with empty values
  announcement: AnnouncementData= new AnnouncementData();
  readonly announcement_id: number;

  constructor(
        private router: Router,
        public user_service: UserService,
        public link_generator: LinkGeneratorService,
        public route: ActivatedRoute,
        public announcement_repository: AnnouncementRepositoryService) {
    this.announcement_id = this.route.snapshot.params['announcement_id'];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    let promise = this.announcement_repository.getAnnouncement(this.announcement_id);
    promise.then(data=>{
      this.announcement = data;
    });

    promise.catch((error: HttpErrorResponse)=>{
      if(error.status == 404){
        this.router.navigate(this.link_generator.error404());
      }

    });
  }

  onDeleteBtnClick(){
    let ans = confirm('Delete this announcement?');

    // todo send request to delete announcement
    if(ans){
      this.router.navigate(this.link_generator.announcementList())
    }
  }

}
