import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule, NgbNavModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    NgbNavModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTooltipModule,
    CommonModule
  ],
  exports: [
    NgbNavModule,
    NgbCollapseModule,
    NgbDropdownModule, 
    NgbTooltipModule,
    CommonModule
  ]
})
export class BootstrapModule {}
