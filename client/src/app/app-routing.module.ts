import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './modules/guide/view/guide/guide.component';
import { TemporaryPageComponent } from './core/temporary-page/temporary-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'assistance', pathMatch: 'full' },
  {path: 'assistance', component: GuideComponent},
  {path: 'irregular', component: TemporaryPageComponent},
  {path: 'separable', component: TemporaryPageComponent},
  {path: 'gerund', component: TemporaryPageComponent},
  {path: 'infinitive', component: TemporaryPageComponent},
  {path: 'phrases', component: TemporaryPageComponent},
  {path: 'stative', component: TemporaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
