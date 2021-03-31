import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import {SideNavToggleComponent} from './components/side-nav-toggle/side-nav-toggle.component';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {HttpClientModule} from '@angular/common/http';
import {SideNavMenuComponent} from './components/side-nav-menu/side-nav-menu.component';
import {AppRoutingModule} from './app-routing-module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FooterComponent} from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavToggleComponent,
    ProfileCardComponent,
    SideNavMenuComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


