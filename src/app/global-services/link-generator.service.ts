
export class LinkGeneratorService {
  readonly HOST_NAME= 'http://localhost:52774';

  constructor(){

  }

  contestList(){
    return ['/contest'];
  }

  contestLink(contest_id: number){
    return ['/contest', contest_id];
  }

  // announcement list
  announcementDetails(announcement_id: number){
    return ['/announcements', announcement_id];
  }

  announcementEdit(announcement_id: number){
    return ['/announcements', announcement_id, 'edit'];
  }

  announcementList(){
    return ['/announcements'];
  }

  contestRegistration(contest_id: number){

  }

  // users
  userDetails(user_id: number){
    return ['/users/', user_id];
  }

  userProblems(user_id: number){
    return ['/users', user_id, 'problems'];
  }

  userSubmissions(user_id: number) {
    return ['/users', user_id, 'submissions'];
  }

  userProfileEditor(user_id: number){
    return ['/users', user_id, 'edit'];
  }

  error404(){
    return ['/error-404'];
  }

  // problems
  problemList(){
    return ['/problems'];
  }

  problemDetails(problem_id: number){
    return ['/problems', problem_id];
  }

  problemCreate(){
    return [`/problems/create`];
  }

  problemEdit(problem_id: number){
    return ['/problems', problem_id, 'edit'];
  }

  problemSubmit(problem_id: number){
    return ['/problems', problem_id, 'submit'];
  }

  problemSubmissions(problem_id: number){
    return ['/problems', problem_id, 'submissions'];
  }

  //
  problemInputFile(problem_id: number): string{
    return `${this.HOST_NAME}/api/problems/${problem_id}/input-file`;
  }

  problemOutputFile(problem_id: number): string{
    return `${this.HOST_NAME}/api/problems/${problem_id}/output-file`;
  }



}
