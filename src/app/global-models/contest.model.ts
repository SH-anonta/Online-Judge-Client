enum ContestType{public, private}

export class Contest{
  readonly contest_id: string;
  readonly title: string;
  readonly description: string;
  readonly start_time: DateTimeFormat;
  readonly end_time: DateTimeFormat;
  readonly type: ContestType;
  readonly problem_list: string[];  // list of problem codes

  constructor(contest_id: string, title: string, description: string,
              start_time: DateTimeFormat, end_time: DateTimeFormat,
              type: ContestType, problem_list: string[],){

    this.contest_id = contest_id;
    this.title = title;
    this.description = description;
    this.start_time = start_time;
    this.end_time = end_time;
    this.type = type;
    this.problem_list = problem_list;
  }
}







