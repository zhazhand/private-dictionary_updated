import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './view/guide/guide.component';



@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
