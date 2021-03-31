import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ToggleSideNavService} from './services/toggle-side-nav-service';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints, BreakpointState,} from '@angular/cdk/layout';
import {HammerGestureConfig} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sideNav') sideNav: any;
  private toggleSub: Subscription;
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  alive: boolean = true;

  constructor(private toggleSideNavService: ToggleSideNavService,
              private breakpointObserver: BreakpointObserver) {
    this.toggleSub = this.toggleSideNavService.triggerSubject.subscribe(
      flag => {
        if (flag) {
          this.toggleSideNav();
        }
      }
    );
  }

  ngOnInit(): void {
    let hammerConfig = new HammerGestureConfig();
    let hammer = hammerConfig.buildHammer(document.documentElement);
    fromEvent(hammer, 'swipe').pipe(
      takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if (res.deltaX < 0) {
          this.sideNav.close();
        } else {
          this.sideNav.open();
        }
      });
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }

  ngOnDestroy(): void {
    this.toggleSub.unsubscribe();
    this.alive = false;
  }

}

