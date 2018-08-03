import { Component, OnInit } from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-devs-only-page',
  templateUrl: './devs-only-page.component.html',
  styleUrls: ['./devs-only-page.component.css']
})
export class DevsOnlyPageComponent implements OnInit {

  constructor(private data_fetcher: DataFetcherService,
              private client: HttpClient) { }

  ngOnInit() {
  }

  onDoStuffBtnClick(){
    let p = this.data_fetcher.getAnnouncementList();

    p.then(d =>{
      console.log(d);
    });
    p.catch(e =>{
      console.log(e);
    });

    let x = this;
  }

}
