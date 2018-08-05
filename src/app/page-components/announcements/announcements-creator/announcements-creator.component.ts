import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataFetcherService} from '../../../global-services/data-fetcher.service';
import {
  AnnouncementCreationData,
  AnnouncementRepositoryService
} from '../../../global-services/repository-services/announcement-repository.service';
import {NgForm} from '@angular/forms';
import {LinkGeneratorService} from '../../../global-services/link-generator.service';

@Component({
  selector: 'app-announcements-creator',
  templateUrl: './announcements-creator.component.html',
  styleUrls: ['./announcements-creator.component.css']
})
export class AnnouncementsCreatorComponent implements OnInit {
  // @ViewChild('DocumentEditor') editor;

  constructor(private router: Router,
              public link_generator: LinkGeneratorService,
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
    })
  }
}
