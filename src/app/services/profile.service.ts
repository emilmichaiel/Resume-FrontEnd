import {Injectable} from '@angular/core';
import {Profile} from '../models/profile.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(environment.apiEndPoint.profile);
  }

}
