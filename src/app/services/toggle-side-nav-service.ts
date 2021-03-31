import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSideNavService {

  triggerSubject = new Subject<boolean>();

  triggerSideNav() {
    this.triggerSubject.next(true);
  }
  
}
