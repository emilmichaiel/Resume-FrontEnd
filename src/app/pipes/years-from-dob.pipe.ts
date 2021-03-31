import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ydob'
})
export class YearsFromDobPipe implements PipeTransform {

  transform(dob: string): number {
    let timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

}
