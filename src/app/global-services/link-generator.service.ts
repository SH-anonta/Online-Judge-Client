
export class LinkGeneratorService {
  constructor(){

  }

  contestLink(contest_id: number){
    return ['/contest', contest_id];
  }

  // announcement list
  announcementDetails(announcement_id){
    return ['/announcements/', announcement_id];
  }

  contestRegistration(contest_id: number){

  }

  // users
  userDetails(user_id){
    return ['/users/', user_id];
  }

}
