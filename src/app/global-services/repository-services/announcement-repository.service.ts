import {Injectable} from '@angular/core';
import {DataFetcherService} from '../data-fetcher.service';

export class AnnouncementListItem {
  Id: number;
  Title: string;
  Description: string;
  Creator: string;
  CreatorId: number;
}

@Injectable()
export class AnnouncementRepositoryService {

  constructor(private data_fetcher: DataFetcherService){}

  getAnnouncements(from: number, to: number): Promise<any>{
    return this.data_fetcher.get('api/announcements', {
      from: from, to: to
    });
  }

  getAnnouncement(id: number): Promise<AnnouncementListItem[]>{
    return this.data_fetcher.get('api/announcements/'+id);
  }
}
