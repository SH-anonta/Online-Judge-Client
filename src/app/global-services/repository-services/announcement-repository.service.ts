import {Injectable} from '@angular/core';
import {DataFetcherService} from '../data-fetcher.service';

export class AnnouncementCreationData{
  Title: string;
  Description: string;
}

export class AnnouncementListItem {
  Id: number;
  Title: string;
  Creator: string;
  CreatorId: number;
  CreateDate: Date;
}

export class AnnouncementData {
  Id: number;
  Title: string;
  Description: string;
  Creator: string;
  CreatorId: number;
  CreateDate: Date;
}

@Injectable()
export class AnnouncementRepositoryService {

  constructor(private data_fetcher: DataFetcherService){}

  getAnnouncements(from: number, to: number): Promise<any>{
    return this.data_fetcher.get('api/announcements', {
      from: from, to: to
    });
  }

  getAnnouncement(id: number): Promise<any>{
    return this.data_fetcher.get('api/announcements/'+id);
  }

  createAnnouncement(data: AnnouncementCreationData): Promise<any>{
    return this.data_fetcher.post('api/announcements/create', data)
  }

  deleteAnnouncement(announcement_id: number) {
    return this.data_fetcher.post(`api/announcements/${announcement_id}/delete`)
  }

  updateAnnouncement(announcement_id: number, data: AnnouncementCreationData) {
    return this.data_fetcher.post(`api/announcements/${announcement_id}/edit`, data);
  }
}
