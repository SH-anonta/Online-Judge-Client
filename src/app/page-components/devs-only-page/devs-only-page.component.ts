import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DataFetcherService} from '../../global-services/data-fetcher.service';
import {HttpClient} from '@angular/common/http';
import {ToastsManager} from 'ng6-toastr';

@Component({
  selector: 'app-devs-only-page',
  templateUrl: './devs-only-page.component.html',
  styleUrls: ['./devs-only-page.component.css'],

})
export class DevsOnlyPageComponent implements OnInit {

  constructor(private client: HttpClient,
              private toast_man: ToastsManager,
              private data_fetcher: DataFetcherService) {
  }

  ngOnInit() {
  }

  onDoStuffBtnClick(){
    this.doAuth();
  }

  onRedDoStuffBtnClick(){
    this.getTempController();
  }

  doAuth(){
    let data = {UserName: 'admin', Password: 'password'};
    let promise = this.data_fetcher.post('api/login', data);

    promise.then(x=>{
      console.log(x);
    })
  }

  getTempController(){
    let promise = this.data_fetcher.get('api/temp/page');

    promise.then(x=>{
      console.log(x);
    })
  }
}
