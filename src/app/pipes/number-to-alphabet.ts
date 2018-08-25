import {Pipe, PipeTransform} from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';

@Pipe({name: 'number_to_alphabet'})
export class NumberToAlphabet implements  PipeTransform{
  static readonly MAPPING: string[];

  mapNumToAlphabet(N){
    N++;

    if( N<1 )return "";
    let name = "";
    let b=26,r;
    let chr;
    while(N>0){
      r = Math.floor( (N-1)%b );
      chr = String.fromCharCode( 65+r );
      name += chr;
      N = Math.floor( (N-r)/b );
    }
    name = name.split("").reverse().join(""); // reversing found string
    return name;
  }

  // gets number from 0-infinity and returns string that represents the excel column name of that number
  transform(num: number): string{
    if(num < 0){
      throw Error('Parameter value out of valid range')
    }

    return this.mapNumToAlphabet(num);
  }
}
