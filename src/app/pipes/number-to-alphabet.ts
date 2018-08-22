import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'number_to_alphabet'})
export class NumberToAlphabet implements  PipeTransform{
  static readonly MAPPING: string[];


  // gets number from 0-infinity and returns string that represents the excel column name of that number
  transform(num: number): string{
    // todo map to column name
    return num.toString();
  }
}
