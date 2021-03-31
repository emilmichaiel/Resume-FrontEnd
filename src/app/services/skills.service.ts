import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SkillContent} from '../models/skill-content.model';
import {environment} from '../../environments/environment';

interface GetResponseSkill {
  _embedded: {
    content: SkillContent,
    title: string
  }

}

@Injectable()
export class SkillsService {

  constructor(private http: HttpClient) {
  }

  getSkills() {
    return this.http.get<GetResponseSkill>(environment.apiEndPoint.skills)
      .pipe(map(response => response._embedded));
  }

}
