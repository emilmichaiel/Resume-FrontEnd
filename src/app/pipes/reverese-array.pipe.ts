import {Pipe, PipeTransform} from '@angular/core';
import {ResumeContent} from '../models/resume-content.model';

@Pipe({
  name: 'reverse'
})
export class RevereseArrayPipe implements PipeTransform {

  transform(value: ResumeContent[]): ResumeContent[] {
    return value.slice().reverse();
  }

}
