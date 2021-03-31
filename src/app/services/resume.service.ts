import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ResumeContent} from '../models/resume-content.model';
import {environment} from '../../environments/environment';

interface GetResponseResume {
  _embedded: {
    content: ResumeContent[],
    title: string
  }
}

@Injectable()
export class ResumeService {

  constructor(private http: HttpClient) {
  }

  getResume() {
    return this.http.get<GetResponseResume>(environment.apiEndPoint.resume)
      .pipe(map(response => response._embedded));
  }

}
