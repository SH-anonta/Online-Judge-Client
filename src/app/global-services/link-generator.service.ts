
export class LinkGeneratorService {
  constructor(){

  }

  contestLink(contest_id: number){
    return ['/contest', contest_id];
  }

  contestRegistration(contest_id: number){

  }
}
