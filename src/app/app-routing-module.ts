import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/about.module').then(m => m.AboutModule)},
  {path: 'skills', loadChildren: () => import('./modules/skills.module').then(m => m.SkillsModule)},
  {path: 'portfolio', loadChildren: () => import('./modules/portfolio.module').then(m => m.PortfolioModule)},
  {path: 'resume', loadChildren: () => import('./modules/resume.module').then(m => m.ResumeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
