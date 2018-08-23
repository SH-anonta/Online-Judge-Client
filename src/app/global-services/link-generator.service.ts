
export class LinkGeneratorService {
  readonly HOST_NAME= 'http://localhost:52774';

  constructor(){

  }

  homePage(){
    return ['']
  }

  // contests

  contestList(){
    return ['/contests'];
  }

  contestLink(contest_id: number){
    return ['/contests', contest_id];
  }

  contestCreator(){
    return ['/contests/create'];
  }

  contestEditor(contest_id: number){
    return ['/contests', contest_id, 'edit'];
  }

  contestRegistration(contest_id: number){
    return ['/contests', contest_id, 'register'];
  }

  contestSubmissions(contest_id: number){
    return ['/contests', contest_id, 'submissions'];
  }

  contestRankList(contest_id: number){
    return ['/contests', contest_id, 'rank'];
  }

  contestProblemList(contest_id: number){
    return ['/contests', contest_id, 'problems'];
  }

  contestProblemDetails(contest_id: number, problem_order: number){
    return ['/contests', contest_id, 'problems', problem_order];
  }

  contestProblemSubmit(contest_id: number, problem_order: number){
    return ['/contests', contest_id, 'problems', problem_order, 'submit'];
  }

  contestContestantSubmissions(contest_id: number, user_id: number){
    return ['/contests', contest_id, 'submissions/users', user_id];
  }

  contestStartCountDown(contest_id: number) {
    return ['/contests', contest_id, 'count-down'];
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

  userContestHistory(user_id: number){
    return ['/users', user_id, 'contest-history'];
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


  registerPage() {
    return ['/register'];
  }

  loginPage() {
    return ['/login'];
  }


}
