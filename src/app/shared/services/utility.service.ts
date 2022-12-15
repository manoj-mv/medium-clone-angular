import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  range(start: number, end: number): number[] {
    // for le
    return [...Array(end).keys()].map(el => el + start + 1);
  }
}
