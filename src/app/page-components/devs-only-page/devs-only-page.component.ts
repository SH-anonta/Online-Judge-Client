import { Component, OnInit } from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';
import {HttpClient} from '@angular/common/http';
import {AnnouncementRepositoryService} from '../../global-services/repository-services/announcement-repository.service';

@Component({
  selector: 'app-devs-only-page',
  templateUrl: './devs-only-page.component.html',
  styleUrls: ['./devs-only-page.component.css'],

})
export class DevsOnlyPageComponent implements OnInit {

  constructor(private client: HttpClient,
              private announcement_repo: AnnouncementRepositoryService) { }

  ngOnInit() {
  }

  onDoStuffBtnClick(){
    // showAnnouncementList()
    this.showAnnouncementDetail();
  }


  showAnnouncementList(){
    let p = this.announcement_repo.getAnnouncements(1, 10);

    p.then(d =>{
      console.log(d);
    });
    p.catch(e =>{
      console.log(e);
    });

    let x = this;
  }

  private showAnnouncementDetail() {
    let p = this.announcement_repo.getAnnouncement(1);

    p.then(d =>{
      console.log(d);
    });
    p.catch(e =>{
      console.log(e);
    });

    let x = this;
  }
}
