import {Pipe, PipeTransform} from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';

@Pipe({name: 'number_to_alphabet'})
export class NumberToAlphabet implements  PipeTransform{
  static readonly MAPPING: string[];


  // gets number from 0-infinity and returns string that represents the excel column name of that number
  transform(num: number): string{
    // todo map to column name
    if(num > 25 || num < 0){
      throw Error('Parameter value out of valid range')
    }

    return String.fromCharCode(num+65);
  }
}
