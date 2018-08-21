import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {
  AnnouncementCreationData,
  AnnouncementRepositoryService
} from '../../../global-services/repository-services/announcement-repository.service';
import {NgForm} from '@angular/forms';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-announcements-creator',
  templateUrl: './announcements-creator.component.html',
  styleUrls: ['./announcements-creator.component.css']
})
export class AnnouncementsCreatorComponent implements OnInit {
  error_messages: string[]= [];


  constructor(private router: Router,
              public link_generator: LinkGeneratorService,
              public toast_man: ToastsManager,
              private announcement_repository: AnnouncementRepositoryService) {
  }

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    // console.log(form.value);
    let data: AnnouncementCreationData = form.value;
    let promise= this.announcement_repository.createAnnouncement(data);

    promise.then((data: any)=>{
      this.router.navigate(this.link_generator.announcementDetails(data.Id));
      this.toast_man.success('Announcement created successfully ');
    });

    promise.catch((resp: HttpErrorResponse) =>{
      this.error_messages= resp.error;
      this.toast_man.error('Failed to create announcement');
    });
  }
}
