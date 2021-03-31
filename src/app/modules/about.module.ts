import {NgModule} from '@angular/core';
import {AboutComponent} from '../components/about/about.component';
import {YearsFromDobPipe} from '../pipes/years-from-dob.pipe';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AboutComponent,
    YearsFromDobPipe
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {path: '', component: AboutComponent}
    ])
  ]
})
export class AboutModule {
}
