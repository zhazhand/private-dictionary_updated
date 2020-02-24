import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './view/guide/guide.component';

const guideRouts: Routes = [
  {path: 'assistance', component: GuideComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(guideRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class GuideRoutingModule { }
