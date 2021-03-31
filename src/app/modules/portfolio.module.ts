import {NgModule} from '@angular/core';
import {PortfolioComponent} from '../components/portfolio/portfolio.component';
import {MatDividerModule} from '@angular/material/divider';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {RouterModule} from '@angular/router';
import {PortfolioService} from '../services/portfolio.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {PortfolioFilterPipe} from '../pipes/portfolio-filter.pipe';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioFilterPipe
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: PortfolioComponent}
    ]),

  ],
  providers: [PortfolioService]
})
export class PortfolioModule {
}
