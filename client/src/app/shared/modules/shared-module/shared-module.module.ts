import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from '../../components/control-panel/control-panel.component';
import { DusterIconComponent } from '../../components/duster-icon/duster-icon.component';
import { CommonTableComponent } from '../../components/common-table/common-table.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AppOrderByPipe } from '../../pipes/app-order-by.pipe';
import { ListFilterPipe } from '../../pipes/list-filter.pipe';



@NgModule({
  declarations: [
    AppOrderByPipe,
    ListFilterPipe,
    ControlPanelComponent,
    DusterIconComponent,
    CommonTableComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppOrderByPipe,
    ListFilterPipe,
    ControlPanelComponent,
    DusterIconComponent,
    CommonTableComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
