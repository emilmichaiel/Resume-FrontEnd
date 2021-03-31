import {Component, Input, OnInit} from '@angular/core';
import {ToggleSideNavService} from '../../services/toggle-side-nav-service';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent implements OnInit {

  @Input()
  isHandSet: boolean;

  constructor(private toggleSideNavService: ToggleSideNavService) {
  }

  ngOnInit(): void {
  }

  closeNav() {
    if (this.isHandSet) {
      this.toggleSideNavService.triggerSubject.next(true);
    }
  }

}
