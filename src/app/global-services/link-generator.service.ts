
export class LinkGeneratorService {
  constructor(){

  }

  contestLink(contest_id: number){
    return ['/contest', contest_id];
  }

  // announcement list
  announcementDetails(announcement_id){
    return ['/announcements', announcement_id];
  }

  announcementEdit(announcement_id){
    return ['/announcements', announcement_id, 'edit'];
  }

  announcementList(){
    return ['/announcements'];
  }

  contestRegistration(contest_id: number){

  }

  // users
  userDetails(user_id){
    return ['/users/', user_id];
  }

  error404(){
    return ['/error-404'];
  }

}
