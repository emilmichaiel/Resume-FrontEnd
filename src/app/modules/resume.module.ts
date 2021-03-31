import {NgModule} from '@angular/core';
import {ResumeComponent} from '../components/resume/resume.component';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {RevereseArrayPipe} from '../pipes/reverese-array.pipe';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {ResumeService} from '../services/resume.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ResumeComponent,
    RevereseArrayPipe
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {path: '', component: ResumeComponent}
    ])
  ],
  providers: [ResumeService]
})
export class ResumeModule {
}
