import {Component, OnInit} from '@angular/core';
import {ToggleSideNavService} from '../../services/toggle-side-nav-service';

@Component({
  selector: 'app-side-nav-toggle',
  templateUrl: './side-nav-toggle.component.html',
  styleUrls: ['./side-nav-toggle.component.css']
})
export class SideNavToggleComponent implements OnInit {


  constructor(private toggleSideNavService: ToggleSideNavService) {
  }

  ngOnInit(): void {
  }

  triggerSideNav() {
    this.toggleSideNavService.triggerSubject.next(true);
  }

}
