import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    NgbTooltipModule,
    CommonModule
  ],
  exports: [
    NgbTooltipModule,
    CommonModule
  ]
})
export class BootstrapModule {}
