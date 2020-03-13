import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from '../../components/control-panel/control-panel.component';
import { DusterIconComponent } from '../../components/duster-icon/duster-icon.component';
import { CommonTableComponent } from '../../components/common-table/common-table.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AppOrderByPipe } from '../../pipes/app-order-by.pipe';
import { ListFilterPipe } from '../../pipes/list-filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';



@NgModule({
  declarations: [
    AppOrderByPipe,
    ListFilterPipe,
    ControlPanelComponent,
    DusterIconComponent,
    CommonTableComponent,
    LoaderComponent,
    BasicModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppOrderByPipe,
    ListFilterPipe,
    ControlPanelComponent,
    DusterIconComponent,
    CommonTableComponent,
    LoaderComponent,
    BasicModalComponent
  ]
})
export class SharedModule { }
