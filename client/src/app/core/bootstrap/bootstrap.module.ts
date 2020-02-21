import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    NgbNavModule,
    NgbCollapseModule,
    NgbTooltipModule,
    CommonModule
  ],
  exports: [
    NgbNavModule,
    NgbCollapseModule, 
    NgbTooltipModule,
    CommonModule
  ]
})
export class BootstrapModule {}
