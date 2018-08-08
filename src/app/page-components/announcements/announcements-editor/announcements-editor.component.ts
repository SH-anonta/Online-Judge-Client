import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {
  AnnouncementCreationData, AnnouncementData,
  AnnouncementRepositoryService
} from '../../../global-services/repository-services/announcement-repository.service';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-announcements-editor',
  templateUrl: './announcements-editor.component.html',
  styleUrls: ['./announcements-editor.component.css']
})
export class AnnouncementsEditorComponent implements OnInit {
  error_messages: string[]= [];
  announcement: AnnouncementData = new AnnouncementData();
  readonly announcement_id: number;

  constructor(private router: Router,
              public route: ActivatedRoute,
              public link_generator: LinkGeneratorService,
              private announcement_repository: AnnouncementRepositoryService) {

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

  formSubmit(form: NgForm) {
    // console.log(form.value);
    let data: AnnouncementCreationData = form.value;
    let promise= this.announcement_repository.updateAnnouncement(this.announcement_id, data);

    promise.then((data: any)=>{
      this.router.navigate(this.link_generator.announcementDetails(this.announcement_id));
    });

    promise.catch((resp: HttpErrorResponse) =>{
      this.error_messages= resp.error;
    });
  }
}
