import {NgModule} from '@angular/core';
import {SkillsComponent} from '../components/skills/skills.component';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {SkillsService} from '../services/skills.service';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {path: '', component: SkillsComponent}
    ])
  ],
  providers: [SkillsService]
})
export class SkillsModule {
}
